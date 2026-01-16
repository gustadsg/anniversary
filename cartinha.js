const pollys = {
    latitude: -19.856720,
    longitude: -43.945236
}

const base = {
    id: 'pollymap',	// This should match the ID used in the DOM
    projection: 'stereo',
    showPlanets: true,
    latitude: pollys.latitude,
    longitude: pollys.longitude, 
    clock: new Date(2025, 0, 21, 19, 0, 0, 0),
    ground: false,
    keyboard: false,
    mouse: true,
    az : 180,
    negative : false,
    showhelp: false,
    showstarlabels: true,
    negative: false,
    showplanets: true,
    showplanetlabels: true,
    constellations: true, 
}

function isMobile() {
    return screen && (screen.width < 400)
}

S(document).ready(function() {
    if(isMobile()) {
        text_container = document.querySelector(".text-container")
        skymap = document.querySelector("#pollymap")
        skymap.style.height= text_container.offsetHeight + "px"
    }
    
	S.virtualsky({
        ...base,
		id: 'pollymap',	// This should match the ID used in the DOM
        clock: new Date(2026, 0, 21, 19, 0, 0, 0),
        latitude: pollys.latitude,
        longitude: pollys.longitude, 
	});

});
