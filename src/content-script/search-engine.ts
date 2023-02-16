
const engine = "Google"
export function getEngineConfig() {
    const cue = "define";
    const config= {
        Google: {
            name: "Google",
            selector: "div[jsname=x3Eknd]",            
            url: (word) => `https://www.google.com/search?q=${cue}+${word}`,
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = `
                    div[jsname=KM35l], div[jsname=p0q1Sd] {
                        display: none;
                    }
                    body.srp {
                        overflow-x: hidden;
                        --center-width: 350px;
                    }  
                `;
                document.body.appendChild(style);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("span[role=link]").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
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