const channelID = "UC1eHx96ZNs7AAXSvYIY1IUA";


const rssURL =
    `https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;



async function loadEpisodes() {


    const container =
        document.querySelector("#episode-container");



    if (!container) return;



    try {


        const response =
            await fetch(
                `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssURL)}`
            );



        const data =
            await response.json();



        const videos =
            data.items.slice(0, 6);

        const featured = videos[0];

        const latestButton = document.querySelector("#latest-episode-button");

        if (latestButton && featured) {

            latestButton.href = featured.link;

        }

        // FEATURED EPISODE CONTENT


        const featuredTitle =
            document.querySelector("#featured-title");


        const featuredDescription =
            document.querySelector("#featured-description");


        const featuredChannel =
            document.querySelector("#featured-channel");


        const featuredDate =
            document.querySelector("#featured-date");



        if (featuredTitle) {

            featuredTitle.textContent =
                featured.title;

        }



        if (featuredDescription) {

            featuredDescription.textContent =
                "A new conversation from Uncaged Mind exploring psychology, society, culture, and the human experience.";

        }



        if (featuredChannel) {

            featuredChannel.textContent =
                "🎙 Uncaged Mind Podcast";

        }



        if (featuredDate) {

            const date =
                new Date(featured.pubDate);


            featuredDate.textContent =
                date.toLocaleDateString(
                    "en-US",
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                );

        }


        const featuredID =
            featured.guid.split(":").pop();


        const featuredThumbnail =
            `https://img.youtube.com/vi/${featuredID}/maxresdefault.jpg`;



        const featuredImage =
            document.querySelector("#featured-thumbnail");


        const featuredLink =
            document.querySelector("#featured-link");


        const featuredButton =
            document.querySelector("#featured-button");



        if (featuredImage) {

            featuredImage.src = featuredThumbnail;

            featuredImage.alt = featured.title;

        }



        if (featuredLink) {

            featuredLink.href = featured.link;

        }



        if (featuredButton) {

            featuredButton.href = featured.link;

        }

        container.innerHTML =
            videos.map(video => {



                const videoID =
                    video.guid.split(":").pop();



                const thumbnail =
                    `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;



                return `

            <article class="episode-card">


                <div class="episode-image">


                    <img
                    src="${thumbnail}"
                    alt="${video.title}"
                    >


                </div>



                <div class="episode-info">


                    <span>
                        Uncaged Mind Podcast
                    </span>



                    <h3>
                        ${video.title}
                    </h3>



                    <p>
                        New conversation exploring
                        ideas, psychology, culture,
                        and human experience.
                    </p>



                    <a 
                    href="${video.link}"
                    target="_blank">

                        Watch Episode →

                    </a>



                </div>


            </article>

            `;


            }).join("");



    }

    catch (error) {


        console.error(
            "Could not load YouTube episodes:",
            error
        );


    }


}



loadEpisodes();