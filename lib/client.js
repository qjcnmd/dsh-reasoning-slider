window.__ModuleLoader__.load({
	id: "reasoning-slider",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const React = require("react");
		// Package-owned stylesheet, mirroring the shipped client-bundle pattern.
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=\"reasoning-slider\"]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "reasoning-slider";
			tag.dataset.pluginCss = "reasoning-slider";
			tag.textContent = `
      .rsm-root { min-width: 0; position: relative; }
      .rsm-trigger { min-width: 0; max-width: 220px; height: 28px; color: var(--dsw-alias-label-secondary); cursor: pointer; background: 0 0; border: none; border-radius: 24px; outline: none; align-items: center; gap: 4px; padding: 0 4px 0 8px; font-size: 13px; font-weight: 500; line-height: 20px; display: flex; }
      .rsm-trigger:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover); }
      .rsm-trigger:focus-visible { box-shadow: 0 0 0 2px var(--dsw-alias-border-l3); }
      .rsm-trigger:disabled { color: var(--dsw-alias-label-dimmed); cursor: default; }
      .rsm-triggerLabel { text-overflow: ellipsis; white-space: nowrap; min-width: 0; overflow: hidden; }
      .rsm-triggerEffort { color: var(--dsw-alias-label-caption); flex: none; }
      .rsm-chevron { color: var(--dsw-alias-label-caption); flex: none; transition: transform .12s; }
      .rsm-chevronOpen { transform: rotate(180deg); }
      .rsm-menu { z-index: 20; border: 1px solid var(--dsw-alias-border-inverted); background: var(--dsw-specific-menu); width: min(220px, 100vw - 32px); max-height: min(460px, 100vh - 96px); box-shadow: var(--dsw-shadow-lv3); color: var(--dsw-alias-label-primary); border-radius: 12px; flex-direction: column; padding: 4px; display: flex; position: absolute; bottom: calc(100% + 8px); right: -30px; overflow: hidden; }
      .rsm-status, .rsm-empty { color: var(--dsw-alias-label-tertiary); padding: 10px; font-size: 13px; line-height: 20px; }
      .rsm-error { background: var(--dsw-alias-interactive-bg-hover-danger); color: var(--dsw-alias-state-error-primary); border-radius: 8px; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px; padding: 7px 8px; font-size: 12px; line-height: 18px; display: flex; }
      .rsm-retry { color: inherit; font: inherit; cursor: pointer; background: 0 0; border: none; flex: none; padding: 0; font-weight: 600; }
      .rsm-groups { min-height: 0; max-height: 200px; overflow-y: auto; }
      .rsm-group + .rsm-group { margin-top: 4px; }
      .rsm-groupTitle { z-index: 1; background: var(--dsw-specific-menu); color: var(--dsw-alias-label-tertiary); padding: 5px 8px 3px; font-size: 12px; font-weight: 500; line-height: 18px; position: sticky; top: 0; }
      .rsm-option { width: 100%; min-height: 38px; color: inherit; text-align: left; cursor: pointer; background: 0 0; border: none; border-radius: 10px; outline: none; align-items: center; gap: 8px; padding: 6px 8px; display: flex; }
      .rsm-option:hover:not(:disabled), .rsm-option:focus-visible { background: var(--dsw-alias-interactive-bg-hover); }
      .rsm-option:disabled { color: var(--dsw-alias-label-dimmed); cursor: default; }
      .rsm-optionCopy { flex-direction: column; flex: 1; min-width: 0; display: flex; }
      .rsm-modelName { color: inherit; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; font-weight: 500; line-height: 20px; overflow: hidden; }
      .rsm-description { color: var(--dsw-alias-label-tertiary); text-overflow: ellipsis; white-space: nowrap; font-size: 12px; line-height: 18px; overflow: hidden; }
      .rsm-check { color: var(--dsw-alias-label-primary); flex: 0 0 18px; place-items: center; display: grid; }
      .rsm-divider { height: 1px; margin: 4px 6px; background: var(--dsw-alias-border-l1); flex: none; }
      .rsm-effortPad { padding: 8px 8px 10px; flex: none; }
      .rsm-effortHead { display: flex; align-items: baseline; justify-content: space-between; margin: 0 4px 8px; }
      .rsm-effortTitle { font-size: 12px; color: var(--dsw-alias-label-tertiary); }
      .rsm-effortValue { font-size: 13px; font-weight: 600; color: var(--dsw-alias-label-primary); }
      .rsm-track { position: relative; height: 32px; touch-action: none; cursor: grab; outline: none; }
      .rsm-track:active { cursor: grabbing; }
      .rsm-range { position: absolute; left: 14px; right: 14px; top: 0; bottom: 0; }
      .rsm-rail { position: absolute; left: -12px; right: -12px; top: 4px; height: 24px; border-radius: 12px; background: #E8E7E8; }
      .rsm-fill { position: absolute; z-index: 0; left: -12px; top: 4px; height: 24px; border-radius: 12px; background: #339CFF; box-shadow: inset 0 1px 1px rgba(255,255,255,.12); overflow: hidden; transition: width .22s cubic-bezier(.2,.8,.3,1); }
      .rsm-fill-drag { transition: none; }
      .rsm-ultraGradient { position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(90deg, #88A3FE 0%, #93A2FF 11%, #A2A6FF 22%, #ABA8FF 33%, #B2A3FE 44%, #AF99FE 55%, #9766E4 66%, #9766E4 72%, #714DC7 86%, #6752C9 100%); opacity: 0; transition: opacity .22s cubic-bezier(.2,.8,.3,1); pointer-events: none; }
      .rsm-fill-max .rsm-ultraGradient { opacity: 1; }
      .rsm-energy { position: absolute; z-index: 1; inset: 0; overflow: hidden; background-repeat: repeat-x; background-size: 62px 24px, 78px 24px, 94px 24px, 70px 24px, 86px 24px, 108px 24px; opacity: 0; pointer-events: none; }
      .rsm-fill-max .rsm-energy { opacity: 1; background-image: radial-gradient(circle at 8% 26%, rgba(255,255,255,.86) 0 1px, transparent 2px), radial-gradient(circle at 24% 72%, rgba(226,215,255,.7) 0 1px, transparent 2px), radial-gradient(circle at 41% 35%, rgba(255,255,255,.86) 0 1px, transparent 2px), radial-gradient(circle at 59% 79%, rgba(231,211,255,.68) 0 1px, transparent 2px), radial-gradient(circle at 76% 21%, rgba(255,255,255,.8) 0 1px, transparent 2px), radial-gradient(circle at 92% 64%, rgba(242,222,255,.9) 0 1px, transparent 2px); animation: rsm-energy-drift .98s linear infinite; }
      .rsm-energy::after { content: ""; position: absolute; top: -5px; bottom: -5px; width: 13%; filter: blur(.6px); pointer-events: none; }
      .rsm-fill-max .rsm-energy::after { background: linear-gradient(105deg, rgba(255,255,255,0), rgba(255,255,255,.13) 30%, rgba(255,250,255,.76) 50%, rgba(231,206,255,.2) 70%, rgba(255,255,255,0)); animation: rsm-energy-glint 1.15s linear infinite; }
      .rsm-energy { filter: brightness(1); transition: filter .18s ease-out; }
      .rsm-fill-max.rsm-ultra-burst .rsm-energy { filter: brightness(1.32); }
      @keyframes rsm-energy-drift { from { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; } to { background-position: -62px 0, -78px 0, -94px 0, -70px 0, -86px 0, -108px 0; } }
      @keyframes rsm-energy-glint { 0%, 20% { opacity: 0; transform: translateX(-150%); } 30% { opacity: .7; } 70% { opacity: .7; } 82%, 100% { opacity: 0; transform: translateX(760%); } }
      .rsm-tick { position: absolute; z-index: 1; top: 14px; width: 4px; height: 4px; margin-left: -2px; border-radius: 50%; background: #B5B5B7; }
      .rsm-tick-on { background: #71BAFF; }
      .rsm-tick-major { top: 12px; width: 8px; height: 8px; margin-left: -4px; }
      .rsm-thumb { position: absolute; z-index: 2; top: 2.5px; width: 27px; height: 27px; margin-left: -13.5px; border-radius: 50%; background: #fff; border: 1px solid #DCDBDC; box-shadow: 0 1px 2px rgba(20,30,50,.12), 0 3px 8px rgba(20,30,50,.08); box-sizing: border-box; transition: left .18s cubic-bezier(.2,.9,.25,1); }
      .rsm-thumb-drag { transition: none; }
      .rsm-track:hover .rsm-thumb { box-shadow: 0 1px 2px rgba(20,30,50,.14), 0 4px 10px rgba(20,30,50,.1); }
      .rsm-track:focus-visible .rsm-thumb { box-shadow: 0 0 0 3px color-mix(in srgb, #4d6bfe 35%, transparent); }
      .rsm-singleEffort { display: flex; align-items: center; justify-content: space-between; padding: 6px 4px; font-size: 13px; color: var(--dsw-alias-label-primary); }
      @media (prefers-reduced-motion: reduce) {
        .rsm-fill, .rsm-ultraGradient, .rsm-energy { transition: none; }
        .rsm-energy, .rsm-energy::after { animation: none; }
      }
    `;
			document.head.appendChild(tag);
		}
		const NO_EFFORTS = [];
		function EffortSlider({ efforts, index, majorIndex, onChange, onSubmit, disabled }) {
			const trackRef = React.useRef(null);
			const dragRef = React.useRef(false);
			const [dragging, setDragging] = React.useState(false);
			const [ultraBurst, setUltraBurst] = React.useState(false);
			const n = efforts.length;
			const clientToPos = (clientX) => {
				const el = trackRef.current;
				if (!el || n <= 1) return 0;
				const rect = el.getBoundingClientRect();
				const ratio = (clientX - rect.left - 14) / (rect.width - 28);
				return Math.max(0, Math.min(n - 1, ratio * (n - 1)));
			};
			const clamp = (position) => Math.max(0, Math.min(n - 1, position));
			const snap = (position) => Math.max(0, Math.min(n - 1, Math.round(position)));
			const magnetize = (position) => {
				const nearest = snap(position);
				return Math.abs(position - nearest) <= 0.10 ? nearest : clamp(position);
			};
			const down = (e) => {
				if (disabled) return;
				e.preventDefault();
				dragRef.current = true;
				setDragging(true);
				e.currentTarget.setPointerCapture(e.pointerId);
				onChange(magnetize(clientToPos(e.clientX)));
			};
			const move = (e) => { if (dragRef.current) onChange(magnetize(clientToPos(e.clientX))); };
			const up = (e) => {
				if (!dragRef.current) return;
				dragRef.current = false;
				setDragging(false);
				const snapped = snap(clientToPos(e.clientX));
				onChange(snapped);
				onSubmit(snapped);
			};
			const key = (e) => {
				if (disabled) return;
				const dir = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
				if (!dir) return;
				e.preventDefault();
				const next = Math.max(0, Math.min(n - 1, Math.round(index) + dir));
				onChange(next);
				onSubmit(next);
			};
			const wheel = (e) => {
				if (disabled || e.deltaY === 0) return;
				e.preventDefault();
				const next = Math.max(0, Math.min(n - 1, Math.round(index) + (e.deltaY < 0 ? 1 : -1)));
				onChange(next);
				onSubmit(next);
			};
			const leftPct = n <= 1 ? (index >= 0 ? 100 : 0) : (index / (n - 1)) * 100;
			const shown = Math.round(index);
			const atMax = n > 1 && index >= n - 1;
			const wasMaxRef = React.useRef(atMax);
			React.useEffect(() => {
				if (atMax && !wasMaxRef.current) {
					setUltraBurst(true);
					const timer = setTimeout(() => setUltraBurst(false), 420);
					wasMaxRef.current = atMax;
					return () => clearTimeout(timer);
				}
				setUltraBurst(false);
				wasMaxRef.current = atMax;
			}, [atMax]);
			return React.createElement("div", {
				ref: trackRef,
				className: "rsm-track",
				role: "slider",
				"aria-label": "推理等级",
				"aria-valuemin": 0,
				"aria-valuemax": n - 1,
				"aria-valuenow": shown,
				"aria-valuetext": efforts[shown] ? efforts[shown].name : "",
				tabIndex: disabled ? -1 : 0,
				onPointerDown: down,
				onPointerMove: move,
				onPointerUp: up,
				onPointerCancel: up,
				onKeyDown: key,
				onWheel: wheel
			},
				React.createElement("div", { className: "rsm-range" },
					React.createElement("div", { className: "rsm-rail" }),
					React.createElement("div", { className: "rsm-fill" + (atMax ? " rsm-fill-max" : "") + (dragging ? " rsm-fill-drag" : "") + (ultraBurst ? " rsm-ultra-burst" : ""), style: { width: index <= 0 ? "0" : "calc(" + leftPct + "% + 12px)" } },
						React.createElement("div", { className: "rsm-ultraGradient" }),
						React.createElement("div", { className: "rsm-energy" })),
					efforts.map((effort, i) => React.createElement("div", {
						key: effort.id,
						className: "rsm-tick" + (i === majorIndex ? " rsm-tick-major" : "") + (i <= shown ? " rsm-tick-on" : ""),
						style: { left: (n <= 1 ? 0 : (i / (n - 1)) * 100) + "%" }
					})),
					React.createElement("div", { className: "rsm-thumb" + (dragging ? " rsm-thumb-drag" : ""), style: { left: leftPct + "%" } })));
		}
		const chevronDown = React.createElement("svg", { className: "rsm-chevron", viewBox: "0 0 24 24", width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M6 9l6 6 6-6" }));
		const checkIcon = React.createElement("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M20 6L9 17l-5-5" }));
		class SliderErrorBoundary extends React.Component {
			constructor(props) {
				super(props);
				this.state = { failed: false };
				this.retryTimer = null;
			}
			static getDerivedStateFromError() {
				return { failed: true };
			}
			componentDidCatch() {
				clearTimeout(this.retryTimer);
				this.retryTimer = setTimeout(() => this.setState({ failed: false }), 1500);
			}
			componentDidUpdate(previousProps) {
				if (previousProps.sessionId !== this.props.sessionId && this.state.failed) this.setState({ failed: false });
			}
			componentWillUnmount() {
				clearTimeout(this.retryTimer);
			}
			render() {
				return this.state.failed ? null : this.props.children;
			}
		}
		function apply(ctx) {
			const slots = ctx.get("slots");
			if (slots === undefined) return;
			const modelDirectories = ctx.get("modelDirectories") ?? ctx.get("models");
			if (modelDirectories === undefined) return;
			const sessions = ctx.get("sessions");
		function SliderSeat(props) {
					const sessionId = props.sessionId;
					const available = sessions === undefined || sessions.subagentAddress === undefined ? true : sessions.subagentAddress(sessionId) === undefined;
					const directory = modelDirectories.directoryFor(sessionId);
					const [state, setState] = React.useState(() => directory.store.getSnapshot());
					React.useEffect(() => {
						return directory.store.subscribe(() => setState(directory.store.getSnapshot()));
					}, []);
					const [open, setOpen] = React.useState(false);
					const rootRef = React.useRef(null);
					const triggerRef = React.useRef(null);
					const reload = () => { directory.load(); };
					React.useEffect(() => { if (available) { reload(); } }, [available]);
					React.useEffect(() => {
						const stop = ctx.on("connection/reset", () => {
							if (typeof directory.resetConnected === "function") directory.resetConnected();
							reload();
						});
						return stop;
					}, []);
					React.useEffect(() => {
						if (!open) return;
						const closeOutside = (event) => { if (!rootRef.current || !rootRef.current.contains(event.target)) setOpen(false); };
						document.addEventListener("mousedown", closeOutside);
						return () => document.removeEventListener("mousedown", closeOutside);
					}, [open]);
					const busy = state.status === "selecting";
					const show = () => { setOpen(true); reload(); };
					const close = (restoreFocus) => {
						setOpen(false);
						if (restoreFocus) queueMicrotask(() => { if (triggerRef.current) triggerRef.current.focus(); });
					};
					const onRootKeyDown = (e) => {
						if (e.key === "Escape" && open) {
							e.preventDefault();
							close(true);
						}
					};
					const onRootBlur = (event) => {
						if (event.relatedTarget instanceof Node && rootRef.current && rootRef.current.contains(event.relatedTarget)) return;
						close();
					};
					const current = state.current;
					const groups = state.groups || [];
					let currentChoice = null;
					for (const group of groups) for (const model of group.models) {
						if (current && current.provider === group.id && current.model === model.id) currentChoice = { group, model };
					}
					const reasoning = currentChoice ? currentChoice.model.reasoning : undefined;
					const efforts = (reasoning && reasoning.efforts) || NO_EFFORTS;
					const effectiveEffort = (current && current.reasoningEffort) || (reasoning && reasoning.defaultEffort) || undefined;
					let effortLabel;
					if (reasoning === undefined) {
						effortLabel = undefined;
					} else if (effectiveEffort !== undefined) {
						const found = efforts.find((level) => level.id === effectiveEffort);
						effortLabel = found ? found.name : String(effectiveEffort);
					} else if (efforts.length > 0) {
						effortLabel = efforts[Math.floor(efforts.length / 2)].name;
					} else {
						effortLabel = undefined;
					}
					const modelLabel = currentChoice ? currentChoice.model.name : "选择模型";
					const triggerLabel = effortLabel === undefined ? modelLabel : modelLabel + " · " + effortLabel;
					const choose = (selection) => {
						if (current && current.provider === selection.provider && current.model === selection.model) return;
						let target = null;
						for (const group of groups) for (const model of group.models) {
							if (group.id === selection.provider && model.id === selection.model) target = model;
						}
						const targetReasoning = target && target.reasoning;
						const targetEfforts = (targetReasoning && targetReasoning.efforts) || NO_EFFORTS;
						let effort;
						if (current && current.reasoningEffort && targetEfforts.some((e) => e.id === current.reasoningEffort)) {
							effort = current.reasoningEffort;
						} else if (targetReasoning && targetReasoning.defaultEffort) {
							effort = targetReasoning.defaultEffort;
						} else if (targetEfforts.length > 0) {
							effort = targetEfforts[Math.floor(targetEfforts.length / 2)].id;
						}
						const sel = { provider: selection.provider, model: selection.model };
						if (effort !== undefined) sel.reasoningEffort = effort;
						directory.select(sel).catch(() => {});
					};
					const chooseEffort = (effort) => {
						if (current === null) return;
						if (effectiveEffort === effort) return;
						const selection = { provider: current.provider, model: current.model };
						if (effort !== undefined) selection.reasoningEffort = effort;
						directory.select(selection).catch(() => {});
					};
					const sliderIndex = efforts.findIndex((level) => level.id === effectiveEffort);
					const resolvedIndex = sliderIndex < 0 ? (efforts.length > 0 ? Math.floor(efforts.length / 2) : 0) : sliderIndex;
					const [localPos, setLocalPos] = React.useState(resolvedIndex);
					React.useEffect(() => { setLocalPos(resolvedIndex); }, [resolvedIndex, efforts]);
					if (!available) return null;
					const sections = groups.map((group) => {
						const options = group.models.map((model) => {
							const selected = current !== null && current.provider === group.id && current.model === model.id;
							return React.createElement("button", {
								key: model.id,
								type: "button",
								role: "menuitemradio",
								"aria-checked": selected,
								className: "rsm-option",
								title: model.name,
								disabled: busy,
								onClick: () => choose({ provider: group.id, model: model.id })
							},
								React.createElement("span", { className: "rsm-optionCopy" },
									React.createElement("span", { className: "rsm-modelName" }, model.name),
									model.description !== undefined ? React.createElement("span", { className: "rsm-description" }, model.description) : null),
								React.createElement("span", { className: "rsm-check" }, selected ? checkIcon : null));
						});
						return React.createElement("section", { key: group.id, role: "group", "aria-labelledby": "g-" + group.id, className: "rsm-group" },
							React.createElement("div", { className: "rsm-groupTitle", id: "g-" + group.id }, group.name),
							options);
					});
					const loadingEl = state.status === "loading" ? React.createElement("div", { className: "rsm-status" }, "正在刷新模型列表…") : null;
					const errorEl = state.error !== null ? React.createElement("div", { className: "rsm-error" },
						React.createElement("span", null, "模型操作失败：" + state.error),
						React.createElement("button", { type: "button", className: "rsm-retry", onClick: reload }, "重试")) : null;
					const emptyEl = state.status === "ready" && groups.length === 0 ? React.createElement("div", { className: "rsm-empty" }, "没有可用的模型。") : null;
					const shownIndex = Math.round(localPos);
					let sliderEl = null;
					if (efforts.length === 0) {
						sliderEl = React.createElement("div", { className: "rsm-empty" }, "当前模型未提供推理等级。");
					} else if (efforts.length === 1) {
						sliderEl = React.createElement("div", { className: "rsm-singleEffort" },
							React.createElement("span", null, "支持档位"),
							React.createElement("span", { className: "rsm-effortValue" }, efforts[0].name));
					} else {
						const majorIndex = reasoning && reasoning.defaultEffort
							? efforts.findIndex((level) => level.id === reasoning.defaultEffort)
							: -1;
						sliderEl = React.createElement(EffortSlider, {
							efforts,
							index: localPos,
							majorIndex,
							disabled: busy,
							onChange: (i) => setLocalPos(i),
							onSubmit: (i) => { const effort = efforts[Math.round(i)]; if (effort) chooseEffort(effort.id); }
						});
					}
					const effortBlock = reasoning !== undefined ? React.createElement(React.Fragment, null,
						React.createElement("div", { className: "rsm-divider" }),
						React.createElement("div", { className: "rsm-effortPad" },
							React.createElement("div", { className: "rsm-effortHead" },
								React.createElement("span", { className: "rsm-effortTitle" }, "推理等级"),
								React.createElement("span", { className: "rsm-effortValue" }, efforts[shownIndex] ? efforts[shownIndex].name : effortLabel)),
							sliderEl)) : null;
					return React.createElement("div", {
						ref: rootRef,
						className: "rsm-root",
						onKeyDown: onRootKeyDown,
						onBlur: onRootBlur
					},
						React.createElement("button", {
							ref: triggerRef,
							type: "button",
							className: "rsm-trigger",
							"aria-haspopup": "menu",
							"aria-expanded": open,
							title: triggerLabel,
							disabled: props.locked === true,
							onClick: () => { if (open) close(); else show(); }
						},
							React.createElement("span", { className: "rsm-triggerLabel" }, modelLabel),
							effortLabel !== undefined ? React.createElement("span", { className: "rsm-triggerEffort" }, effortLabel) : null,
							chevronDown),
						open ? React.createElement("div", { className: "rsm-menu", role: "menu", "aria-label": "模型与推理等级" },
							loadingEl,
							errorEl,
							React.createElement("div", { className: "rsm-groups" }, sections),
							emptyEl,
							effortBlock) : null);
				}
			slots.inject("conversation.input.model", () => slots.register(
				{ name: "conversation.input.model", priority: -1 },
				(props) => React.createElement(SliderErrorBoundary, { sessionId: props.sessionId }, React.createElement(SliderSeat, props))
			));
		}
		exports.inject = ["slots", "modelDirectories", "remote.session"];
		exports.apply = apply;
		return module.exports;
	}
});
