:#let fieldData={
    "eventsLimit": {
        "type": "number",
        "label": "Limit displayed events to:",
        "value": 5
    },
    "includeFollowers": {
        "type": "dropdown",
        "label": "Display followers:",
        "value": "yes",
        "options": {
            "yes": "Yes",
            "no": "No"
        }
    },
    "includeRedemptions": {
        "type": "dropdown",
        "label": "Display redemptions:",
        "value": "yes",
        "options": {
            "yes": "Yes",
            "no": "No"
        }
        "type": "number",
        "label": "Minimum amount of hosting viewers:",
        "value": 1
    },
    "includeRaids": {
        "type": "dropdown",
        "label": "Display raids:",
        "value": "yes",
        "options": {
            "yes": "Yes",
            "no": "No"
        }
    },
    "minRaid": {
        "type": "number",
        "label": "Minimum amount of raiding viewers:",
        "value": 1
    },
    "includeSubs": {
        "type": "dropdown",
        "label": "Display subscribers:",
        "value": "yes",
        "options": {
            "yes": "Yes",
            "no": "No"
        }
    },
    "includeGifters": {
        "type": "dropdown",
        "label": "Display subGifters:",
        "value": "yes",
        "options": {
            "yes": "Yes",
            "no": "No"
        }
    },
    "includeTips": {
        "type": "dropdown",
        "label": "Display tips:",
        "value": "yes",
        "options": {
            "yes": "Yes",
            "no": "No"
        }
    },
    "minTip": {
        "type": "number",
        "label": "Minimum amount of tip:",
        "value": 1
    },
    "includeCheers": {
        "type": "dropdown",
        "label": "Display cheers:",
        "value": "yes",
        "options": {
            "yes": "Yes",
            "no": "No"
        }
    },
    "minCheer": {
        "type": "number",
        "label": "Minimum amount of bits in Cheer:",
        "value": 1
    },
    "direction": {
        "type": "dropdown",
        "label": "Direction:",
        "value": "top",
        "options": {
            "top": "Top",
            "bottom": "Bottom"
        }
    },
    "fontColor": {
        "type": "colorpicker",
        "label": "Font color",
        "value": "rgb(255, 255, 255)"
    },
    "theme": {
        "type": "dropdown",
        "label": "Background pattern:",
        "value": "texture",
        "options": {
            "texture": "texture",
            "diagonal-stripes": "Diagonal stripes",
            "hexagons": "Hexagons",
            "i-like-food": "I like food",
            "tiny-checkers": "Tiny checkers",
            "circuit-board": "Circuit board"
        }
    },
    "backgroundOpacity": {
        "type": "number",
        "min": 0,
        "max": 100,
        "step": 1,
        "label": "Texture opacity",
        "value": 50
    },
    "backgroundColor": {
        "type": "colorpicker",
        "label": "Background color",
        "value": "rgba(36, 6, 73, 0.15)"
    },
    "iconColor": {
        "type": "colorpicker",
        "label": "Icon Color",
        "value": "rgb(255, 255, 255, 255)"
    }
};