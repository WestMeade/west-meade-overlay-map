/*
 * West Meade Overlay parcel collector for a qgis2web/OpenLayers export.
 *
 * Install:
 *   1. Copy this file into the qgis2web export's js/ folder.
 *   2. Add this line near the end of index.html, AFTER the other qgis2web scripts:
 *        <script src="js/west-meade-overlay-collector.js"></script>
 *
 * Required exported parcel fields:
 *   - fid                  (or change PARCEL_ID_FIELD below)
 *   - WestMeadeOverlay     (numeric 0/1)
 *
 * The script:
 *   - lets the user click a parcel;
 *   - presents an Include in West Meade Overlay checkbox;
 *   - keeps selected parcel IDs in browser localStorage;
 *   - updates WestMeadeOverlay to 1/0 in memory so categorized styling can refresh;
 *   - produces a copyable newline or comma-separated list.
 */
(function () {
    "use strict";

    // ---------- Configuration ----------
    const PARCEL_LAYER_TITLE = "Overlay Parcels";
    const PARCEL_ID_FIELD = "fid";
    const OVERLAY_FIELD = "WestMeadeOverlay";
    const STORAGE_KEY = "westMeadeOverlayParcelIds";
    const CONTROL_TITLE = "Overlay parcel collector";

    // ---------- State ----------
    const selectedParcelIds = new Set();
    let currentFeature = null;
    let parcelLayer = null;

    // ---------- Helpers ----------
    function normalizeId(value) {
        if (value === null || value === undefined) return "";
        return String(value).trim();
    }

    function loadSavedIds() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            if (Array.isArray(saved)) {
                saved.forEach(value => {
                    const id = normalizeId(value);
                    if (id) selectedParcelIds.add(id);
                });
            }
        } catch (error) {
            console.warn("Could not load saved overlay parcel IDs:", error);
        }
    }

    function saveIds() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(Array.from(selectedParcelIds))
            );
        } catch (error) {
            console.warn("Could not save overlay parcel IDs:", error);
        }
    }

    function getAllLayers(layerOrGroup) {
        const layers = [];
        const collection = layerOrGroup && layerOrGroup.getLayers
            ? layerOrGroup.getLayers()
            : null;

        if (!collection) return layers;

        collection.forEach(layer => {
            if (layer && layer.getLayers) {
                layers.push(...getAllLayers(layer));
            } else {
                layers.push(layer);
            }
        });

        return layers;
    }

    function findParcelLayer() {
        const layers = getAllLayers(map);

        // Prefer an exact title match.
        let found = layers.find(layer =>
            layer &&
            layer.get &&
            layer.get("title") === PARCEL_LAYER_TITLE
        );

        // Fallback: find a vector layer containing both required fields.
        if (!found) {
            found = layers.find(layer => {
                const source = layer && layer.getSource ? layer.getSource() : null;
                if (!source || !source.getFeatures) return false;

                const features = source.getFeatures();
                if (!features.length) return false;

                const feature = features[0];
                return (
                    feature.get(PARCEL_ID_FIELD) !== undefined &&
                    feature.get(OVERLAY_FIELD) !== undefined
                );
            });
        }

        return found || null;
    }

    function isFeatureInParcelLayer(feature, layer) {
        if (!feature || !layer || !layer.getSource) return false;
        const source = layer.getSource();
        return source && source.hasFeature
            ? source.hasFeature(feature)
            : source.getFeatures().includes(feature);
    }

    function applySavedStateToLayer() {
        if (!parcelLayer || !parcelLayer.getSource) return;

        parcelLayer.getSource().getFeatures().forEach(feature => {
            const id = normalizeId(feature.get(PARCEL_ID_FIELD));
            if (!id) return;

            feature.set(
                OVERLAY_FIELD,
                selectedParcelIds.has(id) ? 1 : 0,
                true
            );
        });

        if (parcelLayer.changed) parcelLayer.changed();
    }

    function setFeatureSelected(feature, checked) {
        const id = normalizeId(feature.get(PARCEL_ID_FIELD));
        if (!id) {
            alert(`This parcel has no value in "${PARCEL_ID_FIELD}".`);
            return;
        }

        if (checked) {
            selectedParcelIds.add(id);
            feature.set(OVERLAY_FIELD, 1);
        } else {
            selectedParcelIds.delete(id);
            feature.set(OVERLAY_FIELD, 0);
        }

        feature.changed();
        if (parcelLayer && parcelLayer.changed) parcelLayer.changed();

        saveIds();
        refreshPanel();
    }

    function sortedIds() {
        return Array.from(selectedParcelIds).sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true })
        );
    }

    // ---------- UI ----------
    const panel = document.createElement("div");
    panel.id = "west-meade-overlay-collector";
    panel.innerHTML = `
        <div class="wmoc-header">
            <strong>${CONTROL_TITLE}</strong>
            <button type="button" id="wmoc-close" aria-label="Close">×</button>
        </div>

        <div id="wmoc-current" class="wmoc-current">
            Click an overlay parcel.
        </div>

        <label class="wmoc-check-row">
            <input type="checkbox" id="wmoc-checkbox" disabled>
            <span>Include parcel in overlay</span>
        </label>

        <div class="wmoc-summary">
            Selected parcels: <strong id="wmoc-count">0</strong>
        </div>

        <div class="wmoc-actions">
            <button type="button" id="wmoc-show">Show IDs</button>
            <button type="button" id="wmoc-clear">Clear all</button>
        </div>

        <div id="wmoc-output-wrap" hidden>
            <label for="wmoc-format">Output format</label>
            <select id="wmoc-format">
                <option value="lines">One ID per line</option>
                <option value="commas">Comma-separated</option>
                <option value="qgis">QGIS IN expression</option>
            </select>

            <textarea id="wmoc-output" rows="9" readonly></textarea>

            <div class="wmoc-actions">
                <button type="button" id="wmoc-select-text">Select text</button>
                <button type="button" id="wmoc-hide-output">Hide list</button>
            </div>
        </div>
    `;

    const style = document.createElement("style");
    style.textContent = `
        #west-meade-overlay-collector {
            position: absolute;
            z-index: 10000;
            top: 300px;
            right: 12px;
            width: min(340px, calc(100vw - 24px));
            box-sizing: border-box;
            padding: 12px;
            border: 1px solid rgba(0,0,0,.25);
            border-radius: 6px;
            background: rgba(255,255,255,.97);
            color: #111;
            font: 14px/1.35 Arial, Helvetica, sans-serif;
            box-shadow: 0 2px 10px rgba(0,0,0,.25);
        }

        #west-meade-overlay-collector[hidden] {
            display: none;
        }

        .wmoc-header,
        .wmoc-actions,
        .wmoc-check-row {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .wmoc-header {
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .wmoc-header button {
            border: 0;
            background: transparent;
            font-size: 22px;
            line-height: 1;
            cursor: pointer;
        }

        .wmoc-current {
            min-height: 38px;
            margin-bottom: 8px;
            padding: 7px;
            border-radius: 4px;
            background: #f2f2f2;
            overflow-wrap: anywhere;
        }

        .wmoc-check-row {
            margin: 10px 0;
        }

        .wmoc-summary {
            margin: 8px 0;
        }

        .wmoc-actions {
            flex-wrap: wrap;
            margin-top: 8px;
        }

        .wmoc-actions button,
        #wmoc-format {
            padding: 6px 9px;
            border: 1px solid #888;
            border-radius: 4px;
            background: #fff;
            cursor: pointer;
        }

        #wmoc-output-wrap {
            margin-top: 12px;
        }

        #wmoc-format,
        #wmoc-output {
            width: 100%;
            box-sizing: border-box;
            margin-top: 5px;
        }

        #wmoc-output {
            padding: 7px;
            resize: vertical;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size: 12px;
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(panel);

    const closeButton = document.getElementById("wmoc-close");
    const currentDisplay = document.getElementById("wmoc-current");
    const checkbox = document.getElementById("wmoc-checkbox");
    const countDisplay = document.getElementById("wmoc-count");
    const showButton = document.getElementById("wmoc-show");
    const clearButton = document.getElementById("wmoc-clear");
    const outputWrap = document.getElementById("wmoc-output-wrap");
    const formatSelect = document.getElementById("wmoc-format");
    const output = document.getElementById("wmoc-output");
    const selectTextButton = document.getElementById("wmoc-select-text");
    const hideOutputButton = document.getElementById("wmoc-hide-output");

    function buildOutput() {
        const ids = sortedIds();

        switch (formatSelect.value) {
            case "commas":
                return ids.join(",");
            case "qgis": {
                // Quote values so this works whether the parcel ID is numeric or text.
                const quoted = ids.map(id => `'${id.replaceAll("'", "''")}'`);
                return `"${PARCEL_ID_FIELD}" IN (${quoted.join(", ")})`;
            }
            case "lines":
            default:
                return ids.join("\n");
        }
    }

    function refreshOutput() {
        output.value = buildOutput();
    }

    function refreshPanel() {
        countDisplay.textContent = String(selectedParcelIds.size);

        if (!currentFeature) {
            currentDisplay.textContent = "Click an overlay parcel.";
            checkbox.disabled = true;
            checkbox.checked = false;
        } else {
            const id = normalizeId(currentFeature.get(PARCEL_ID_FIELD));
            currentDisplay.textContent = id
                ? `Parcel ${PARCEL_ID_FIELD}: ${id}`
                : `Parcel has no "${PARCEL_ID_FIELD}" value.`;

            checkbox.disabled = !id;
            checkbox.checked = id ? selectedParcelIds.has(id) : false;
        }

        refreshOutput();
    }

    // ---------- Events ----------
    checkbox.addEventListener("change", () => {
        if (currentFeature) {
            setFeatureSelected(currentFeature, checkbox.checked);
        }
    });

    showButton.addEventListener("click", () => {
        outputWrap.hidden = false;
        refreshOutput();
    });

    hideOutputButton.addEventListener("click", () => {
        outputWrap.hidden = true;
    });

    formatSelect.addEventListener("change", refreshOutput);

    selectTextButton.addEventListener("click", () => {
        output.focus();
        output.select();
    });

    clearButton.addEventListener("click", () => {
        if (
            selectedParcelIds.size > 0 &&
            !window.confirm("Clear all selected overlay parcels?")
        ) {
            return;
        }

        selectedParcelIds.clear();
        saveIds();
        applySavedStateToLayer();
        refreshPanel();
    });

    closeButton.addEventListener("click", () => {
        panel.hidden = true;
    });

    // Clicking a parcel selects it for editing in this panel.
    map.on("singleclick", event => {
        let clickedFeature = null;

        map.forEachFeatureAtPixel(
            event.pixel,
            (feature, layer) => {
                if (
                    layer === parcelLayer ||
                    isFeatureInParcelLayer(feature, parcelLayer)
                ) {
                    clickedFeature = feature;
                    return true;
                }
                return false;
            },
            {
                hitTolerance: 4
            }
        );

        if (clickedFeature) {
            currentFeature = clickedFeature;
            panel.hidden = false;
            refreshPanel();
        }
    });

    // ---------- Initialization ----------
    loadSavedIds();

    parcelLayer = findParcelLayer();

    if (!parcelLayer) {
        currentDisplay.textContent =
            `Could not find parcel layer "${PARCEL_LAYER_TITLE}". ` +
            `Check PARCEL_LAYER_TITLE and the exported fields in this script.`;
        checkbox.disabled = true;
        console.error(
            "West Meade overlay collector could not find the parcel layer."
        );
        return;
    }

    applySavedStateToLayer();
    refreshPanel();

    console.info(
        `West Meade overlay collector loaded. Parcel layer: "${PARCEL_LAYER_TITLE}", ` +
        `ID field: "${PARCEL_ID_FIELD}".`
    );
})();
