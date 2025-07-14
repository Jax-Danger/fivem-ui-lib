new class UILib {
	constructor() {
		this.handlers = {};
		window.addEventListener("message", (e) => this._handleMessage(e));
	}

	on(type, callback) {
		this.handlers[type] = callback;
	}

	_handleMessage(event) {
		const data = event.data;
		const handler = this.handlers[data.type];
		if (handler) handler(data);
	}

	send(type, payload = {}) {
		fetch(`https://${GetParentResourceName()}/${type}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});
	}

	showNotification(text) {
		const div = document.createElement('div');
		div.textContent = text;
		Object.assign(div.style, {
			position: 'absolute',
			top: '20px',
			right: '20px',
			padding: '10px',
			background: 'black',
			color: 'white',
			fontFamily: 'sans-serif',
			zIndex: 9999
		});
		document.body.appendChild(div);
		setTimeout(() => div.remove(), 3000);
	}
}

window.UILib = UILib;
