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


S(document).ready(function() {
    // primeiro beijo
	S.virtualsky({
        ...base,
		id: 'pollymap',	// This should match the ID used in the DOM
        clock: new Date(2025, 0, 21, 19, 0, 0, 0),
        latitude: pollys.latitude,
        longitude: pollys.longitude, 
	});

    // show do black
	S.virtualsky({
        ...base,
		id: 'pollymap2',	// This should match the ID used in the DOM
        clock: new Date(2025, 1, 1, 1, 0, 0, 0),
        latitude: -19.854430,
        longitude: -43.975552, 
	});

    // primeiro encontro - mascate
	S.virtualsky({
        ...base,
		id: 'pollymap3',	// This should match the ID used in the DOM
        clock: new Date(2025, 1, 14, 0, 30, 0, 0),
        latitude: -19.915626,
        longitude: -43.927843,
	});

    // carnaval - volta belchior
	S.virtualsky({
        ...base,
		id: 'pollymap4',	// This should match the ID used in the DOM
        clock: new Date(2025, 2, 1, 16, 0, 0, 0),
        latitude: 19.918719, 
        longitude: -43.912333
	});

    // viagem campinas - parque taquaral
	S.virtualsky({
        ...base,
		id: 'pollymap5',	// This should match the ID used in the DOM
        clock: new Date(2025, 3, 6, 16, 0, 0, 0),
        latitude: -22.873343,
        longitude: -47.046551, 
	});

    // viagem chapada dos veadeiros
	S.virtualsky({
        ...base,
		id: 'pollymap6',	// This should match the ID used in the DOM
        clock: new Date(2025, 3, 19, 16, 0, 0, 0),
        latitude: -13.792672,
        longitude: -47.460827, 
	});

    // show do mestrinho
	S.virtualsky({
        ...base,
		id: 'pollymap7',	// This should match the ID used in the DOM
        clock: new Date(2025, 5, 19, 23, 0, 0, 0),
        latitude: -19.924373,
        longitude: -43.922559, 
	});

    // festa junina - Lote
	S.virtualsky({
        ...base,
		id: 'pollymap8',	// This should match the ID used in the DOM
        clock: new Date(2025, 6, 5, 23, 50, 0, 0),
        latitude: -19.819228,
        longitude: -43.936292, 
	});

    // Cidade Junina 
	S.virtualsky({
        ...base,
		id: 'pollymap9',	// This should match the ID used in the DOM
        clock: new Date(2025, 6, 19, 23, 0, 0, 0),
        latitude: -19.985475,
        longitude: -43.967395,
	});

    // ouro preto
	S.virtualsky({
        ...base,
		id: 'pollymap10',	// This should match the ID used in the DOM
        clock: new Date(2025, 7, 10, 13, 0, 0, 0),
        latitude: -20.386645, 
        longitude: -43.500462, 
	});

    // Marisa monte - estacao ecologica
	S.virtualsky({
        ...base,
		id: 'pollymap11',	// This should match the ID used in the DOM
        clock: new Date(2025, 9, 18, 21, 0, 0, 0),
        latitude: -19.859554, 
        longitude: -43.995801, 
	});

    // ano novo
	S.virtualsky({
        ...base,
		id: 'pollymap12',	// This should match the ID used in the DOM
        clock: new Date(2025, 11, 31, 23, 59, 0, 0),
        latitude: -19.818765,
        longitude: -43.939477, 
	});
});
