
const engine = "Google"
export function getEngineConfig() {
    const cue = chrome.i18n.getMessage("define_cue");
    const config= {
        Google: {
            name: "Google",
            selector: "div[jsname=x3Eknd]",            
            url: (word) => `https://www.google.com/search?q=${cue}+${word}`,
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = `
                    div[jsname=KM35l], div[jsname=p0q1Sd],
                    .pronunciation_promo__pm-ctnr, .pronunciation_promo__pm-ml, 
                    #sfooter {
                        display: none !important;
                    }
                    body.srp {
                        overflow-x: hidden;
                        --center-width: 350px;
                    }  
                `;
                document.body.appendChild(style);

                document.body.querySelectorAll("a, [role=link]").forEach(a => {
                    if(!a.parentElement) return;

                    // Remove the underline from the wrapping style element.
                    a.parentElement.style.textDecoration = "none";

                    // Remove the hyperlink.
                    a.parentElement.replaceChild(document.createTextNode(a.textContent!), a);
                });
            },
        },
        DuckDuckGo: {
            name: "DuckDuckGo",
            selector: "div.ia-module--definitions",            
            url: (word) => `https://duckduckgo.com/?q=${cue}+${word}`,
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = `
                    div.ia-module--definitions {
                        border: none !important;
                        box-shadow: none !important;
                    }
                    .module--definitions__collapsed-group, 
                    .module__toggle,
                    .module--definitions__attribution {
                        display:none !important;
                    }
                    .module--definitions__group {
                        display: block !important;
                    }
                `;
                document.body.appendChild(style);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("a").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
                });                
            },
        }
    }
    return config[engine];
}