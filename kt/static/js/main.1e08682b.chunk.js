(this["webpackJsonpair-conditioner"] = this["webpackJsonpair-conditioner"] || []).push([[0], {
	104: function (e, t, n) { },
	105: function (e, t, n) { },
	111: function (e, t, n) { },
	114: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(0),
			a = n.n(r),
			o = n(33),
			c = n.n(o),
			i = (n(104), n(105), n(139)),
			s = n(116),
			l = n(93),
			d = n(1);
		function u(e) {
			var t = e.children,
				n = Object(i.a)("(prefers-color-scheme: dark)") ? "dark" : "light",
				a = Object(r.useMemo)((function () {
					return Object(l.a)({
						palette: {
							mode: n
						}
					})
				}), [n]);
			return Object(d.jsx)(s.a, {
				theme: a,
				children: t
			})
		}
		var j = n(150),
			b = n(92),
			h = n(14),
			g = n(152),
			m = n(151),
			x = n(142),
			f = n(145),
			p = n(86),
			O = n.n(p),
			w = n(53),
			v = "https://m.ximalaya.com/sleepaudio/6?mixedTrackIds=331526646&utm_source=smxkt";
		function y() {
			console.log("jump"),
				w.a.ga("send", {
					hitType: "event",
					eventCategory: "Outbound Link",
					eventAction: "click",
					eventLabel: "Ximalaya Adsense"
				}),
				window.open(v)
		}
		var k = Object(f.a)((function (e) {
			return {
				root: {
					margin: e.spacing(3, 0),
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}
			}
		}));
		function C() {
			var e = k();
			return Object(d.jsxs)(m.a, {
				align: "center",
				className: e.root,
				color: "textSecondary",
				children: [Object(d.jsx)(O.a, {}), "Tip: ", Object(d.jsx)("a", {
					className: "ximalaya-text-link",
					href: v,
					target: "_blank",
					onClick: function () {
						y()
					},
					children: "\ud83d\udc76\ud83c\udffb"
				}), "\u4e3a\u4f60\u7684\u590f\u65e5\u5e26\u53bb\u6e05\u51c9\uff01"]
			})
		}
		var S = n(32),
			N = n(143),
			I = n(153),
			T = n(90),
			L = n.n(T),
			E = n(91),
			B = n.n(E),
			R = n(88),
			Y = n.n(R),
			W = n(87),
			A = n.n(W),
			J = n(89),
			_ = n.n(J),
			F = n(61),
			M = n(52),
			D = function () {
				return Object(M.b)()
			},
			P = M.c,
			U = n(45),
			V = Object(U.b)({
				name: "toast",
				initialState: {
					open: !1,
					message: ""
				},
				reducers: {
					setMessage: function (e, t) {
						e.message = t.payload
					},
					setOpen: function (e, t) {
						e.open = t.payload
					}
				}
			}),
			z = V.actions,
			G = z.setMessage,
			H = z.setOpen,
			X = V.reducer,
			$ = {
				status: "ac-status",
				mode: "ac-mode",
				temperature: "ac-temperature"
			},
			q = {
				status: !1,
				mode: localStorage.getItem($.mode) || "cold",
				temperature: parseInt(localStorage.getItem($.temperature) || "") || 20
			},
			K = Object(U.b)({
				name: "ac",
				initialState: q,
				reducers: {
					setStatus: function (e, t) {
						e.status = t.payload
					},
					setTemperature: function (e, t) {
						e.temperature = t.payload
					},
					increment: function (e) {
						e.temperature += 1,
							localStorage.setItem($.temperature, e.temperature.toString())
					},
					decrement: function (e) {
						e.temperature -= 1,
							localStorage.setItem($.temperature, e.temperature.toString())
					},
					setMode: function (e, t) {
						e.mode = t.payload,
							localStorage.setItem($.mode, e.mode)
					},
					toggleStatus: function (e) {
						e.status = !e.status,
							localStorage.setItem($.status, e.status.toString())
					}
				}
			}),
			Q = function (e) {
				return e.ac.temperature
			},
			Z = K.actions,
			ee = Z.setTemperature,
			te = Z.increment,
			ne = Z.decrement,
			re = Z.setMode,
			ae = Z.toggleStatus,
			oe = Z.setStatus,
			ce = K.reducer;
		function ie(e) {
			return "https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public" + e
		}
		var se, le, de, ue = Object(f.a)((function (e) {
			return {
				margin: {
					margin: e.spacing(1)
				},
				extendedIcon: {
					marginRight: e.spacing(1)
				}
			}
		}));
		function je(e) {
			return Object(d.jsx)(I.a, Object(S.a)(Object(S.a)({},
				e), {},
				{
					onClick: function () {
						!
							function () {
								var e = document.getElementById("di");
								e && e.play()
							}(),
							e.onClick()
					}
				}))
		}
		function be() {
			var e = document.getElementById("ac-work");
			e.load(),
				e.play(),
				se = setTimeout((function () {
					!
						function () {
							var e = document.getElementById("air-extractor-fan");
							e.load(),
								e.play(),
								le = setTimeout((function () {
									de = setInterval((function () {
										e.currentTime = 2
									}), 56e3)
								}), 2e3)
						}()
				}), 8e3)
		}
		var he = Object(l.a)({
			palette: {
				primary: F.a
			}
		}),
			ge = ie("kt/assets/audio/di.mp3"),
			me = ie("kt/assets/audio/ac-work.mp3"),
			xe = ie("kt/assets/audio/air-extractor-fan.mp3");
		function fe() {
			var e = ue(),
				t = P((function (e) {
					return e.ac
				})),
				n = D();
			return Object(d.jsxs)(x.a, {
				my: 4,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				children: [Object(d.jsx)("audio", {
					id: "di",
					src: ge,
					preload: "auto"
				}), Object(d.jsx)("audio", {
					id: "ac-work",
					src: me,
					preload: "auto"
				}), Object(d.jsx)("audio", {
					id: "air-extractor-fan",
					src: xe,
					preload: "auto"
				}), Object(d.jsxs)("div", {
					children: [" ", Object(d.jsx)(je, {
						color: "primary",
						"aria-label": "cold",
						className: e.margin,
						onClick: function () {
							n(re("cold"))
						},
						children: Object(d.jsx)(A.a, {})
					}), Object(d.jsx)(N.a, {
						theme: he,
						children: Object(d.jsx)(je, {
							color: t.status ? "secondary" : "primary",
							"aria-label": "add",
							className: e.margin,
							onClick: function () {
								!
									function (e, t) {
										if (e) {
											document.getElementById("ac-work").load();
											var n = document.getElementById("air-extractor-fan");
											se && clearTimeout(se),
												le && clearTimeout(le),
												de && clearInterval(de),
												n.currentTime = 58
										} else be();
										t(ae())
									}(t.status, n)
							},
							style: {
								color: "white"
							},
							children: Object(d.jsx)(Y.a, {})
						})
					}), Object(d.jsx)(je, {
						"aria-label": "hot",
						className: e.margin,
						style: {
							backgroundColor: "orange",
							color: "white"
						},
						onClick: function () {
							n(re("hot"))
						},
						children: Object(d.jsx)(_.a, {})
					})]
				}), Object(d.jsx)(je, {
					"aria-label": "add",
					className: e.margin,
					onClick: function () {
						n((function (e, t) {
							Q(t()) < 31 ? e(te()) : (e(G("\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01")), e(H(!0)))
						}))
					},
					children: Object(d.jsx)(L.a, {})
				}), Object(d.jsx)(je, {
					"aria-label": "reduce",
					className: e.margin,
					onClick: function () {
						n((function (e, t) {
							Q(t()) > 16 ? e(ne()) : (e(G("\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01")), e(H(!0)))
						}))
					},
					children: Object(d.jsx)(B.a, {})
				})]
			})
		}
		var pe = n(15),
			Oe = n(149),
			we = n(144),
			ve = n.p + "static/media/logo.5fb28574.svg",
			ye = n(38),
			ke = (n(111), "#e0e0e0"),
			Ce = "#cccccc",
			Se = "#bbbbbb",
			Ne = Object(f.a)((function (e) {
				return {
					acBorder: {
						borderRadius: 10,
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20
					},
					acDisplay: {
						textShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)"
					},
					acLogo: {
						width: 12
					},
					acStatus: {
						backgroundColor: function (e) {
							return e.backgroundColor || "transparent"
						}
					},
					energyLabel: {
						backgroundColor: "#4ea5f5"
					}
				}
			}));
		function Ie(e) {
			return Object(d.jsx)(x.a, Object(S.a)({
				bgcolor: "background.paper",
				height: 150,
				border: 1,
				borderColor: ke,
				borderRadius: 10,
				boxShadow: 3,
				position: "relative"
			},
				e))
		}
		function Te() {
			var e = P(Q);
			return Object(d.jsxs)(m.a, {
				variant: "h4",
				align: "center",
				children: [Object(d.jsx)("span", {
					className: "font-digit ac-temperature",
					children: e
				}), Object(d.jsx)("small", {
					className: "font-digit",
					children: "\xb0C"
				})]
			})
		}
		var Le = a.a.forwardRef((function (e, t) {
			return Object(d.jsxs)(x.a, Object(S.a)(Object(S.a)({},
				e), {},
				{
					ref: t,
					position: "absolute",
					top: 25,
					right: 30,
					color: Ce,
					children: [Object(d.jsxs)(m.a, {
						align: "left",
						variant: "subtitle2",
						children: [Object(d.jsx)("span", {
							children: "cold" === e.mode ? "\u2744" : "\u2600\ufe0f"
						}), "\ufe0f\ufe0f"]
					}), Object(d.jsx)(Te, {})]
				}))
		}));
		function Ee(e) {
			return Object(d.jsx)(x.a, {
				textAlign: "center",
				mt: 12,
				children: Object(d.jsx)("a", {
					href: ye.c.url,
					title: ye.b,
					target: "_blank",
					rel: "noreferrer noopener",
					children: Object(d.jsx)("img", {
						className: e.className,
						src: ve,
						alt: "logo"
					})
				})
			})
		}
		function Be() {
			return Object(d.jsx)(x.a, {
				mt: 1,
				border: 1,
				borderColor: ke
			})
		}
		function Re(e) {
			var t = {
				backgroundColor: e.status ? "#38F709" : ke
			},
				n = Ne(t);
			return Object(d.jsx)(x.a, {
				className: n.acStatus,
				position: "absolute",
				height: 4,
				width: 4,
				borderRadius: "50%",
				top: 130,
				right: 10
			})
		}
		function Ye(e, t, n, r) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
				o = Object(pe.a)(new Array(e).keys()),
				c = o.map((function (e) {
					return Object(d.jsx)(x.a, {
						mx: r,
						my: a,
						width: n,
						height: n,
						borderRadius: "50%",
						bgcolor: t
					},
						e)
				}));
			return Object(d.jsx)(x.a, {
				display: "flex",
				justifyContent: "center",
				children: c
			})
		}
		function We(e) {
			return Object(d.jsxs)(x.a, {
				className: e.className,
				position: "absolute",
				top: 10,
				left: 10,
				height: 70,
				width: 50,
				borderRadius: 2,
				p: .5,
				children: [Ye(6, "white", 4, .25), Object(d.jsxs)(x.a, {
					my: .5,
					px: 1,
					py: .25,
					height: 28,
					width: "100%",
					bgcolor: "background.paper",
					children: [Object(d.jsxs)(Oe.a, {
						container: !0,
						children: [Object(d.jsx)(x.a, {
							bgcolor: "green",
							height: 3,
							width: "40%"
						}), Object(d.jsx)(x.a, {
							height: 3,
							marginLeft: "40%",
							style: {
								borderTop: 1.5,
								borderRight: 2,
								borderBottom: 1.5,
								borderLeft: 0,
								borderTopColor: "transparent",
								borderRightColor: "green",
								borderBottomColor: "transparent",
								borderLeftColor: "transparent",
								borderStyle: "solid"
							}
						}), Object(d.jsx)(x.a, {
							bgcolor: "green",
							height: 3,
							width: "10%"
						})]
					}), Object(d.jsx)(x.a, {
						mt: .25,
						bgcolor: "lightGreen",
						height: 3,
						width: "50%"
					}), Object(d.jsx)(x.a, {
						mt: .25,
						bgcolor: "#ffc107",
						height: 3,
						width: "60%"
					}), Object(d.jsx)(x.a, {
						mt: .25,
						bgcolor: "orange",
						height: 3,
						width: "70%"
					}), Object(d.jsx)(x.a, {
						mt: .25,
						bgcolor: "red",
						height: 3,
						width: "80%"
					})]
				}), Object(d.jsxs)(x.a, {
					mb: .25,
					pt: .1,
					height: 20,
					width: "100%",
					bgcolor: "background.paper",
					children: [Ye(11, "black", 2, .1, .25), Object(d.jsx)(x.a, {
						my: .1,
						borderTop: 1,
						height: 0,
						width: "100%"
					}), Ye(9, "black", 1.5, .1, .25), Ye(10, "black", 1.2, .1, 0)]
				}), Ye(8, "white", 2, .1)]
			})
		}
		function Ae() {
			return Object(d.jsxs)("div", {
				className: "energy-saving-label",
				children: [Object(d.jsx)("span", {
					className: "label-font",
					children: "\xa0\u8282\u80fd\u4ea7\u54c1\u60e0\u6c11\u5de5\u7a0b"
				}), Object(d.jsx)("a", {
					className: "ximalaya-link",
					href: v,
					target: "_blank",
					onClick: function () {
						y()
					},
					children: Object(d.jsx)("img", {
						className: "ximalaya-logo",
						src: "/ximalaya-logo.png",
						alt: "ximalaya-logo"
					})
				}), Ye(10, "black", 1.2, .1, 0), Ye(10, "black", 1.2, .1, 0), Ye(11, "black", 2, .1, .25)]
			})
		}
		var Je = a.a.forwardRef((function (e, t) {
			return Object(d.jsxs)(x.a, Object(S.a)(Object(S.a)({},
				e), {},
				{
					ref: t,
					mt: 3,
					display: "flex",
					justifyContent: "center",
					children: [Object(d.jsx)(x.a, {
						style: {
							transform: "rotate(10deg)"
						},
						bgcolor: Se,
						width: 5,
						height: 40
					}), Object(d.jsx)(x.a, {
						mx: 10,
						bgcolor: Se,
						width: 5,
						height: 40
					}), Object(d.jsx)(x.a, {
						style: {
							transform: "rotate(-10deg)"
						},
						bgcolor: Se,
						width: 5,
						height: 40
					})]
				}))
		}));
		function _e(e) {
			var t = Ne(e);
			return Object(d.jsxs)(x.a, {
				children: [Object(d.jsxs)(Ie, {
					className: t.acBorder,
					children: [Object(d.jsx)(we.a, {
						in: e.status,
						children: Object(d.jsx)(Le, {
							mode: e.mode
						})
					}), Object(d.jsx)(Ee, {
						className: t.acLogo
					}), Object(d.jsx)(Be, {}), Object(d.jsx)(Re, {
						status: e.status
					}), Object(d.jsx)(We, {
						className: t.energyLabel,
						titleLength: 6
					}), Object(d.jsx)(Ae, {})]
				}), Object(d.jsx)(we.a, {
					in: e.status,
					timeout: {
						enter: 2500,
						exit: 1500
					},
					children: Object(d.jsx)(Je, {})
				})]
			})
		}
		var Fe = n(148),
			Me = n(146);
		function De() {
			var e = P((function (e) {
				return e.toast
			})),
				t = D(),
				n = function (e, n) {
					t(H(!1))
				};
			return Object(d.jsx)(Fe.a, {
				open: e.open,
				autoHideDuration: 5e3,
				onClose: n,
				children: Object(d.jsx)(Me.a, {
					onClose: n,
					severity: "error",
					style: {
						width: "100%"
					},
					children: e.message
				})
			})
		}
		var Pe = n(155);
		var Ue = function () {
			return Object(d.jsxs)("div", {
				children: [Object(d.jsx)(x.a, {
					children: Object(d.jsxs)(m.a, {
						variant: "body2",
						color: "textSecondary",
						align: "center",
						children: ["\xa9 ", Object(d.jsx)(Pe.a, {
							color: "inherit",
							href: ye.c.url,
							target: "_blank",
							children: "Yun Air Conditioner"
						}), " - ", Object(d.jsx)(Pe.a, {
							color: "inherit",
							href: ye.a.url,
							target: "_blank",
							children: ye.a.name
						})]
					})
				}), Object(d.jsx)(m.a, {
					variant: "body2",
					color: "textSecondary",
					align: "center",
					children: " 2019 - " + (new Date).getFullYear()
				})]
			})
		};
		var Ve = function () {
			var e = P((function (e) {
				return e.ac
			})),
				t = D();
			return Object(r.useEffect)((function () {
				function e(e) {
					switch (e.key) {
						case $.status:
							t(oe("true" === e.newValue));
							break;
						case $.temperature:
							t(ee(parseInt(e.newValue || "20")));
							break;
						case $.mode:
							t(re(e.newValue || "cold"))
					}
				}
				return window.addEventListener("storage", e),
					function () {
						window.removeEventListener("storage", e)
					}
			}), [t]),
				Object(d.jsx)(u, {
					children: Object(d.jsxs)(j.a, {
						maxWidth: "sm",
						className: e.status ? "hot" === e.mode ? "hot-color" : "cold-color" : "",
						children: [Object(d.jsxs)(x.a, {
							sx: {
								pt: 4
							},
							bgcolor: "transparent",
							children: [Object(d.jsx)(m.a, {
								color: "textPrimary",
								align: "center",
								variant: "h4",
								component: "h1",
								gutterBottom: !0,
								children: "\u4fbf\u643a\u5c0f\u7a7a\u8c03"
							}), Object(d.jsx)(C, {}), Object(d.jsx)(_e, {
								status: e.status,
								temperature: e.temperature,
								mode: e.mode
							}), Object(d.jsx)("div", {
								className: "text-center",
								children: Object(d.jsx)(x.a, {
									sx: {
										mt: 2
									},
									children: Object(d.jsx)(g.a, {
										variant: "outlined",
										onClick: function () {
											window.open("/#/rc", "_blank", "width=300, height=400")
										},
										children: "\u72ec\u7acb\u9065\u63a7\u5668"
									})
								})
							}), Object(d.jsx)(fe, {}), Object(d.jsx)(Ue, {})]
						}), Object(d.jsx)(De, {})]
					})
				})
		};
		function ze() {
			return Object(d.jsxs)("div", {
				children: [Object(d.jsx)(fe, {}), Object(d.jsx)(Ue, {})]
			})
		}
		var Ge = function () {
			return Object(r.useEffect)((function () {
				console.log("%c \u2601\ufe0f Symbean %c https://Symbean.com", "color: white; background: #0078E7; padding:5px 0;", "padding:4px;border:1px solid #0078E7;"),
					console.log("%c \u2601\ufe0f Symbean %c https://Symbean.com", "color: white; background: #0078E7; padding:5px 0;", "padding:4px;border:1px solid #0078E7;")
			}), []),
				Object(d.jsx)(u, {
					children: Object(d.jsx)(j.a, {
						maxWidth: "sm",
						children: Object(d.jsx)(b.a, {
							children: Object(d.jsxs)(h.c, {
								children: [Object(d.jsx)(h.a, {
									path: "/rc",
									children: Object(d.jsx)(ze, {})
								}), Object(d.jsx)(h.a, {
									path: "/",
									children: Object(d.jsx)(Ve, {})
								})]
							})
						})
					})
				})
		},
			He = Object(U.a)({
				reducer: {
					ac: ce,
					toast: X
				}
			}),
			Xe = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
		function $e(e, t) {
			navigator.serviceWorker.register(e).then((function (e) {
				e.onupdatefound = function () {
					var n = e.installing;
					null != n && (n.onstatechange = function () {
						"installed" === n.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
					})
				}
			})).
				catch((function (e) {
					console.error("Error during service worker registration:", e)
				}))
		}
		var qe = function (e) {
			e && e instanceof Function && n.e(3).then(n.bind(null, 156)).then((function (t) {
				var n = t.getCLS,
					r = t.getFID,
					a = t.getFCP,
					o = t.getLCP,
					c = t.getTTFB;
				n(e),
					r(e),
					a(e),
					o(e),
					c(e)
			}))
		};
		w.a.initialize("UA-121354150-10"),
			w.a.pageview(window.location.pathname + window.location.search),
			c.a.render(Object(d.jsx)(a.a.StrictMode, {
				children: Object(d.jsx)(M.a, {
					store: He,
					children: Object(d.jsx)(Ge, {})
				})
			}), document.getElementById("root")),
			function (e) {
				if ("serviceWorker" in navigator) {
					if (new URL("", window.location.href).origin !== window.location.origin) return;
					window.addEventListener("load", (function () {
						var t = "".concat("", "/service-worker.js");
						Xe ? (!
							function (e, t) {
								fetch(e, {
									headers: {
										"Service-Worker": "script"
									}
								}).then((function (n) {
									var r = n.headers.get("content-type");
									404 === n.status || null != r && -1 === r.indexOf("javascript") ? navigator.serviceWorker.ready.then((function (e) {
										e.unregister().then((function () {
											window.location.reload()
										}))
									})) : $e(e, t)
								})).
									catch((function () {
										console.log("No internet connection found. App is running in offline mode.")
									}))
							}(t, e), navigator.serviceWorker.ready.then((function () {
								console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")
							}))) : $e(t, e)
					}))
				}
			}(),
			qe()
	},
	38: function (e) {
		e.exports = JSON.parse('{"b":"\u4e91\u7a7a\u8c03\uff0c\u4fbf\u643a\u5c0f\u7a7a\u8c03","a":{"url":"https://Symbean.com","email":"@Symbean.com","name":"Symbean"},"c":{"type":"git","url":"https://Symbean.com"}}')
	}
},
[[114, 1, 2]]]);
//# sourceMappingURL=main.1e08682b.chunk.js.map
