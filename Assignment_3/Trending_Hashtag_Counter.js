const countHashtags = (caption) => {
    if (typeof caption !== "string") {
        return "Invalid";
    }

    const words = caption.split(" ");

    let hashtagCount = 0;
    let longestTag = "";

    for (let word of words) {
        if (word.startsWith("#")) {
            hashtagCount++;

            const tag = word.slice(1);

            if (tag.length > longestTag.length) {
                longestTag = tag;
            }
        }
    }

    return { hashtagCount, longestTag };
};

console.log(countHashtags(("#Sami #Loves #Sami goriber engineer")))


console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));

console.log(countHashtags("#ai #ml data science"))

