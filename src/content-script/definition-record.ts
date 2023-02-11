export class DefinitionRecord {
    word: string;
    phonetic?: string;
    audioUrl?: string;
    licenseName?: string;
    licenseUrl?: string;
    sourceUrl?: string;
    meanings: ContextualMeaning[] = [];
}

export class ContextualMeaning {
    partOfSpeech: string;
    definition: string;
    example?: string;
    synonyms: string[] = [];
    antonyms: string[] = [];
    score: number = 0;
}

export function mapToDef(data: any[]): Promise<DefinitionRecord> {
    const defrec = new DefinitionRecord();
    if(!data || data.length == 0) {
        return Promise.reject("Invalid response");
    }

    defrec.word = data[0].word;
    defrec.phonetic = data[0].phonetic;
    defrec.licenseName = data[0].license?.name;
    defrec.licenseUrl = data[0].license?.url;
    defrec.sourceUrl = data[0].sourceUrls[0];

    data.forEach(d => {
        d.phonetics.forEach(p => {
            if(!defrec.audioUrl) {
                defrec.audioUrl = p.audio;
            }
        });

        d.meanings.forEach(m => {
            m.definitions.forEach(df => {
                const ctxMeaning = new ContextualMeaning();
                ctxMeaning.definition = df.definition;
                ctxMeaning.example = df.example;
                ctxMeaning.synonyms = df.synonyms;
                ctxMeaning.antonyms = df.antonyms;
                ctxMeaning.partOfSpeech = m.partOfSpeech;
                // TODO: compute score.
                // Dedupe definitions.
                defrec.meanings.push(ctxMeaning);
            });
        })
    })
    // If data contains more than 1 root items, just copy only meanings.

    return Promise.resolve(defrec);
}


function hideAllElse(el) {
    let ns = el.nextElementSibling;
    while(ns) {
        let nns = ns.nextElementSibling;
        if(ns.style) {
            ns.style.display = "none";
        }
        ns = nns;
    }

    let ps = el.previousElementSibling;
    while(ps) {
        let pps  = ps.previousElementSibling;
        if(ps.style) {
            ps.style.display = "none";
        }
        ps = pps;
    }
    if(el.tagName != "BODY") {
        hideAllElse(el.parentElement)
    }
}