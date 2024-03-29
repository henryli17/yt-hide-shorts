let hide = true;

window.addEventListener('load', () => {   
	hook();
	hotkeys();
	const observer = new MutationObserver(() => hook());
	observer.observe(
		document,
		{ subtree: true, childList: true }
	);
});

const selector = `[d="M10.65,1C10.65,1,10.65,1,10.65,1c-0.37,0-0.75,0.1-1.09,0.31L4.25,4.46C3.44,4.93,2.96,5.89,3,6.9  C3.05,7.9,3.58,8.77,4.39,9.18c0.02,0.01,0.75,0.35,0.75,0.35l-0.9,0.53c-1.14,0.68-1.58,2.27-0.98,3.55C3.69,14.49,4.5,15,5.35,15  c0.37,0,0.74-0.1,1.09-0.31l5.31-3.15c0.8-0.48,1.29-1.43,1.24-2.45c-0.04-0.99-0.58-1.87-1.39-2.27c-0.02-0.01-0.75-0.35-0.75-0.35  l0.9-0.53c1.14-0.68,1.58-2.27,0.97-3.55C12.31,1.51,11.49,1,10.65,1L10.65,1z"]`;

const parent = "ytd-rich-item-renderer";

const hook = () => {
	if (!window.location.href.includes("/feed/subscriptions")) {
		return;
	}

	if (hide) {
		$(selector)
			.parents(parent)
			.hide()
		;
	}
};

const hotkeys = () => {
	$(window).keydown(e => {
		if ((e.metaKey || e.ctrlKey) && e.code === 'KeyS') {
			e.preventDefault();
			$(selector)
				.parents(parent)
				.toggle()
			;
			hide = !hide;
		}
	});

	$(window).keyup(e => {
		if ((e.metaKey || e.ctrlKey) && e.code === 'KeyS') {
			e.preventDefault();
		}
	});
};
