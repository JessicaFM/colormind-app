    export function apiColormind(params) {
        let url = "http://colormind.io/api/";
        const settings = {
            method: 'POST',
            body: JSON.stringify(params)
        };
        const response = await fetch(url, settings);
		return await response.json();
    }
