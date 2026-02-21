const fs = require('fs');
const https = require('https');

const corporateLinks = [
    "https://ibb.co/wZpM1xhz", "https://ibb.co/nNC2MRhh", "https://ibb.co/cKnSS8x9", "https://ibb.co/qLTBJzXz", "https://ibb.co/tpSm43WM", "https://ibb.co/Wpc4GpbZ", "https://ibb.co/xtQn5pV5", "https://ibb.co/Tq7r7VB0", "https://ibb.co/3Ycg65Z7", "https://ibb.co/7twYXVZS", "https://ibb.co/V0TK0pgX", "https://ibb.co/9X8yZD2", "https://ibb.co/5gGgRZMv", "https://ibb.co/LDcjF9y1", "https://ibb.co/Q78NcPdG", "https://ibb.co/YFgBs6pQ", "https://ibb.co/QjzYwc6d", "https://ibb.co/Psp4Wsxr", "https://ibb.co/bMD5tD6Z", "https://ibb.co/TBrhdNbx", "https://ibb.co/wrbY2gsk", "https://ibb.co/g0xw261", "https://ibb.co/prdQ2dP8", "https://ibb.co/jsZXtdk", "https://ibb.co/spDrdk7q", "https://ibb.co/Gf2TkHG3", "https://ibb.co/60Frc360", "https://ibb.co/ynsTYXYg", "https://ibb.co/R4BF4CTD", "https://ibb.co/b5BnJMpp", "https://ibb.co/bj6fjNq5", "https://ibb.co/mr5N3SMz", "https://ibb.co/PGL962kK", "https://ibb.co/Dx9NXZy", "https://ibb.co/zV0LB6Rx", "https://ibb.co/LDnKTZgq", "https://ibb.co/nq40kTc5", "https://ibb.co/ZzwBRf77", "https://ibb.co/PvffqV9r"
];

const documentaryLinks = [
    "https://ibb.co/7dsXHqrZ", "https://ibb.co/pjwM8C1g", "https://ibb.co/0yLbhWM9", "https://ibb.co/20qQZSWp", "https://ibb.co/7xm2smvr", "https://ibb.co/fzW5RVn4", "https://ibb.co/NgcY47NQ", "https://ibb.co/Xr34YpWJ", "https://ibb.co/Xr34YpWJ", "https://ibb.co/3yTPBHN1", "https://ibb.co/FqYXmVjW", "https://ibb.co/qY0CdfY5", "https://ibb.co/h1hnQNZ4", "https://ibb.co/h1hnQNZ4", "https://ibb.co/4gMvYV0C", "https://ibb.co/gMhgH2Dv", "https://ibb.co/zhwb2g7Z", "https://ibb.co/8nWGP9yz", "https://ibb.co/fVFBb7p9", "https://ibb.co/Wvg05x67", "https://ibb.co/F4gMZTgC", "https://ibb.co/vxK8nfVZ", "https://ibb.co/5xFhc3Y2", "https://ibb.co/5xFhc3Y2", "https://ibb.co/V0dmsQPT", "https://ibb.co/VW6LG5Cg", "https://ibb.co/yFMFvj9B"
];

const commercialLinks = [
    "https://ibb.co/1GM0MK5G", "https://ibb.co/xtQn5pV5", "https://ibb.co/zWZhksYN", "https://ibb.co/svfKXqKN", "https://ibb.co/1J495KT6", "https://ibb.co/0yVczxKp", "https://ibb.co/603GPTqx", "https://ibb.co/GbJB1wF", "https://ibb.co/BHptxnRK", "https://ibb.co/7xYwtQ6G", "https://ibb.co/hFv8Pwzq", "https://ibb.co/HfbFSzDQ", "https://ibb.co/xSXz7j7G", "https://ibb.co/wrZbLJty", "https://ibb.co/jkJWN5P5", "https://ibb.co/5X3hF1tZ", "https://ibb.co/QFxZ3yKG", "https://ibb.co/d0qpfGcf", "https://ibb.co/YFXLwW8N", "https://ibb.co/MkhYGBYq", "https://ibb.co/zV0LB6Rx", "https://ibb.co/Vp54qgx0", "https://ibb.co/n8wdN3C4", "https://ibb.co/JRQsJYmz", "https://ibb.co/JR3fSSvT", "https://ibb.co/kVn1MM7z", "https://ibb.co/QvGtD0tb"
];

const fetchDirectUrl = (url) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/<meta property="og:image" content="([^"]+)"/);
                if (match && match[1]) {
                    resolve(match[1]);
                } else {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
};

(async () => {
    let nextId = 38; // Assume existing videos go up to 37
    let addedItems = [];

    const processLinks = async (links, category) => {
        // remove duplicates
        const uniqueLinks = [...new Set(links)];
        for (let link of uniqueLinks) {
            const directUrl = await fetchDirectUrl(link);
            if (directUrl) {
                addedItems.push({
                    id: nextId++,
                    title: "", // No title as requested
                    category: category,
                    thumbnail: directUrl,
                    duration: "", // No duration
                    description: "",
                    isImage: true
                });
                console.log(`Fetched ${category}: ${directUrl}`);
            }
        }
    };

    console.log("Fetching corporate links...");
    await processLinks(corporateLinks, "Corporate");
    console.log("Fetching documentary links...");
    await processLinks(documentaryLinks, "Documentary");
    console.log("Fetching commercial links...");
    await processLinks(commercialLinks, "Commercial");

    // Let's read the existing file
    const filePath = './src/data/portfolioVideos.ts';
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Convert new items to TS array format
    const newItemsStr = addedItems.map(item => JSON.stringify(item, null, 4)).join(",\n    ");

    // Find the end of the array inside the file
    // It should end with '];'
    if (fileContent.includes('];')) {
        let replacement = ",\n    " + newItemsStr + "\n];";
        fileContent = fileContent.replace(/\n\];/, replacement);

        // Also strip existing durations and titles to match user request "remove video names like commercial video 1 thing like that on all videos and the duration: tbd remove it as well"
        // But doing it via AST is safer. Let's do string replacement for existing items:
        fileContent = fileContent.replace(/"title":\s*"[^"]*",/g, '"title": "",');
        fileContent = fileContent.replace(/"duration":\s*"[^"]*",/g, '"duration": "",');

        fs.writeFileSync(filePath, fileContent);
        console.log("Successfully updated portfolioVideos.ts");
    } else {
        console.log("Could not find array end '];'");
    }
})();
