(function() {
    'use strict';

    window.addEventListener('load', function() {
        const id = document.querySelector("meta[property='imdb:pageConst']").getAttribute("content");
        const seasonEpisodeDiv = document.getElementsByClassName("sc-232116ef-0 fRMkyd")[0];

        if(document.getElementsByClassName("ipc-inline-list ipc-inline-list--show-dividers sc-8c396aa2-0 bwvZbJ baseAlt")[0].getElementsByTagName("li").length == 3) { //If tv show element not in list
            document.getElementsByClassName(
                "ipc-btn ipc-btn--full-width ipc-btn--center-align-content ipc-btn--large-height ipc-btn--core-accent1 ipc-btn--theme-baseAlt sc-25d7db5-0 cUdSVJ")[0].href = "https://www.2embed.to/embed/imdb/movie?id=" + id;

            document.getElementsByClassName("sc-25d7db5-1 kgicru")[0].innerHTML = "Watch on 2Embed";
            document.getElementsByClassName("sc-25d7db5-3 gGDzYZ")[0].innerHTML = "stream/download for free";
        } else { //Is homepage for tv show
            document.getElementsByClassName(
                "ipc-btn ipc-btn--full-width ipc-btn--center-align-content ipc-btn--large-height ipc-btn--core-accent1 ipc-btn--theme-baseAlt sc-25d7db5-0 cUdSVJ")[0].href = "https://www.imdb.com/title/" + id + "/episodes";

            document.getElementsByClassName("sc-25d7db5-1 kgicru")[0].innerHTML = "View episodes";
            document.getElementsByClassName("sc-25d7db5-3 gGDzYZ")[0].innerHTML = "select an episode to watch";
        }

        if(seasonEpisodeDiv !== null) { //Is episode page
            var seasonEpisodeVals = seasonEpisodeDiv.innerHTML.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
            var season = seasonEpisodeVals[0].replace("S", "");
            var episode = seasonEpisodeVals[2].replace("E", "");
            var tvid = document.getElementsByClassName("ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color sc-b9aff61-1 kVktZU")[0].href.split("/")[4];

            document.getElementsByClassName(
                "ipc-btn ipc-btn--full-width ipc-btn--center-align-content ipc-btn--large-height ipc-btn--core-accent1 ipc-btn--theme-baseAlt sc-25d7db5-0 cUdSVJ")[0].href = "https://www.2embed.to/embed/imdb/tv?id=" + tvid + "&s=" + season + "&e=" + episode;

            document.getElementsByClassName("sc-25d7db5-1 kgicru")[0].innerHTML = "Watch on 2Embed";
            document.getElementsByClassName("sc-25d7db5-3 gGDzYZ")[0].innerHTML = "stream/download for free";
        }

    }, false);
})();
