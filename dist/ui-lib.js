class UILib {
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
}

window.fivem = new UILib();
