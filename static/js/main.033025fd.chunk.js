(window["webpackJsonpppmtool-react-client"] =
	window["webpackJsonpppmtool-react-client"] || []).push([
	[0],
	{
		147: function (e, t, a) {
			e.exports = a(314);
		},
		152: function (e, t, a) {},
		153: function (e, t, a) {},
		179: function (e, t, a) {},
		223: function (e, t, a) {},
		242: function (e, t, a) {},
		276: function (e, t, a) {},
		277: function (e, t, a) {},
		308: function (e, t) {},
		311: function (e, t, a) {},
		312: function (e, t, a) {},
		313: function (e, t, a) {},
		314: function (e, t, a) {
			"use strict";
			a.r(t);
			var n,
				r = a(0),
				o = a.n(r),
				s = a(34),
				i = a.n(s),
				c = (a(152), a(2)),
				l = a(3),
				m = a(5),
				u = a(4),
				p = a(6),
				d = (a(153), a(8)),
				h = a(7),
				f = a(9),
				v = a.n(f),
				E = a(16),
				g = a(14),
				b = a.n(g),
				y = "GET_ERRORS",
				k = function (e, t) {
					return (function () {
						var a = Object(E.a)(
							v.a.mark(function a(n) {
								return v.a.wrap(
									function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													return (
														(a.prev = 0),
														(a.next = 3),
														b.a.post("/api/project", e)
													);
												case 3:
													t.push("/dashboard"),
														n({ type: y, payload: {} }),
														(a.next = 10);
													break;
												case 7:
													(a.prev = 7),
														(a.t0 = a.catch(0)),
														n({ type: y, payload: a.t0.response.data });
												case 10:
												case "end":
													return a.stop();
											}
									},
									a,
									null,
									[[0, 7]]
								);
							})
						);
						return function (e) {
							return a.apply(this, arguments);
						};
					})();
				},
				N = (function (e) {
					function t() {
						var e, a;
						Object(c.a)(this, t);
						for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
							r[o] = arguments[o];
						return (
							((a = Object(m.a)(
								this,
								(e = Object(u.a)(t)).call.apply(e, [this].concat(r))
							)).onDeleteClick = function (e) {
								a.props.deleteProject(e);
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									var e = this.props.project;
									return o.a.createElement(
										"div",
										{ className: "container" },
										o.a.createElement(
											"div",
											{ className: "card card-body bg-light mb-3" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-2 d-none d-lg-block" },
													o.a.createElement(
														"span",
														{ className: "mx-auto" },
														e.projectIdentifier
													)
												),
												o.a.createElement(
													"div",
													{ className: "col-lg-6 col-md-4 col-8" },
													o.a.createElement("h4", null, e.projectName),
													o.a.createElement("p", null, e.description)
												),
												o.a.createElement(
													"div",
													{ className: "col-md-4 d-lg-block" },
													o.a.createElement(
														"ul",
														{ className: "list-group" },
														o.a.createElement(
															d.b,
															{
																to: "/projectBoard/".concat(
																	e.projectIdentifier
																),
															},
															o.a.createElement(
																"li",
																{ className: "list-group-item board" },
																o.a.createElement(
																	"i",
																	{ className: "fa fa-flag-checkered pr-1" },
																	" Project Board "
																)
															)
														),
														o.a.createElement(
															d.b,
															{
																to: "/automationBoard/".concat(
																	e.projectIdentifier
																),
															},
															o.a.createElement(
																"li",
																{ className: "list-group-item board" },
																o.a.createElement(
																	"i",
																	{ className: "fa fa-flag-checkered pr-1" },
																	" Automation Board "
																)
															)
														),
														o.a.createElement(
															d.b,
															{
																to: "/updateProject/".concat(
																	e.projectIdentifier
																),
															},
															o.a.createElement(
																"li",
																{ className: "list-group-item update" },
																o.a.createElement(
																	"i",
																	{ className: "fa fa-edit pr-1" },
																	" Update Project Info"
																)
															)
														),
														o.a.createElement(
															"li",
															{
																className: "list-group-item delete",
																onClick: this.onDeleteClick.bind(
																	this,
																	e.projectIdentifier
																),
															},
															o.a.createElement(
																"i",
																{ className: "fa fa-minus-circle pr-1" },
																" Delete Project"
															)
														)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				j = Object(h.b)(null, {
					deleteProject: function (e) {
						return (function () {
							var t = Object(E.a)(
								v.a.mark(function t(a) {
									return v.a.wrap(function (t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													if (
														!window.confirm(
															"Are you sure? This will delete the project and all the data related to it"
														)
													) {
														t.next = 4;
														break;
													}
													return (
														(t.next = 3), b.a.delete("/api/project/".concat(e))
													);
												case 3:
													a({ type: "DELETE_PROJECT", payload: e });
												case 4:
												case "end":
													return t.stop();
											}
									}, t);
								})
							);
							return function (e) {
								return t.apply(this, arguments);
							};
						})();
					},
				})(N),
				O = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									return o.a.createElement(
										o.a.Fragment,
										null,
										o.a.createElement(
											d.b,
											{ to: this.props.link, className: this.props.cssClass },
											this.props.caption
										)
									);
								},
							},
						]),
						t
					);
				})(o.a.Component),
				C = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									this.props.security.validToken
										? this.props.getProjects()
										: this.props.history.push("/"),
										localStorage.removeItem("selectedOption");
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props.project.projects;
									return o.a.createElement(
										"div",
										{ className: "projects" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-12" },
													o.a.createElement(
														"h1",
														{ className: "display-4 text-center" },
														"Projects"
													),
													o.a.createElement("br", null),
													o.a.createElement(O, {
														link: "/addProject",
														caption: "Create a Project",
														cssClass: "btn btn-lg btn-info",
													}),
													o.a.createElement("br", null),
													o.a.createElement("hr", null),
													e &&
														e.map(function (e) {
															return o.a.createElement(j, {
																key: e.id,
																project: e,
															});
														})
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				S = Object(h.b)(
					function (e) {
						return { project: e.project, security: e.security };
					},
					{
						getProjects: function () {
							return (function () {
								var e = Object(E.a)(
									v.a.mark(function e(t) {
										var a;
										return v.a.wrap(function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (e.next = 2), b.a.get("/api/project/all");
													case 2:
														(a = e.sent),
															t({ type: "GET_PROJECTS", payload: a.data });
													case 4:
													case "end":
														return e.stop();
												}
										}, e);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})();
						},
					}
				)(C),
				x = function (e) {
					e
						? (b.a.defaults.headers.common.Authorization = e)
						: delete b.a.defaults.headers.common.Authorization;
				},
				T = function (e) {
					e
						? (b.a.defaults.headers.common.Candidate = e)
						: delete b.a.defaults.headers.common.Candidate;
				},
				w = a(42),
				P = a.n(w),
				_ = function (e, t) {
					return (function () {
						var a = Object(E.a)(
							v.a.mark(function a(n) {
								var r, o, s;
								return v.a.wrap(
									function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													return (
														(a.prev = 0),
														(a.next = 3),
														b.a.post("/api/users/login", e)
													);
												case 3:
													(r = a.sent),
														(o = r.data.token) && "undefined" !== typeof o
															? (localStorage.removeItem("jwtTokenCandidate"),
															  localStorage.setItem("jwtToken", o),
															  x(o),
															  (s = P()(o)),
															  console.log(s),
															  n({ type: "SET_CURRENT_USER", payload: s }),
															  s.profileIdentifier && t.push("/dashboard"),
															  n({ type: y, payload: {} }))
															: n({
																	type: y,
																	payload: {
																		username: "Invalid Username",
																		password: "Invalid Password",
																	},
															  }),
														(a.next = 12);
													break;
												case 8:
													(a.prev = 8),
														(a.t0 = a.catch(0)),
														a.t0.response.data.username
															? n({ type: y, payload: a.t0.response.data })
															: a.t0.message && e.username
															? ((window.location.href = "/infoPage/".concat(
																	e.username
															  )),
															  n({ type: y, payload: a.t0 }))
															: a.t0.message &&
															  ((window.location.href = "/infoPage/".concat(
																	a.t0.message
															  )),
															  n({ type: y, payload: a.t0 }));
												case 12:
												case "end":
													return a.stop();
											}
									},
									a,
									null,
									[[0, 8]]
								);
							})
						);
						return function (e) {
							return a.apply(this, arguments);
						};
					})();
				},
				I = function () {
					return function (e) {
						localStorage.removeItem("jwtToken"),
							localStorage.removeItem("jwtTokenCandidate"),
							x(!1),
							T(!1),
							e({ type: "SET_CURRENT_USER", payload: {} });
					};
				},
				D = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "logout",
								value: function () {
									this.props.logout(), (window.location.href = "/");
								},
							},
							{
								key: "render",
								value: function () {
									var e,
										t = this.props.security,
										a = t.validToken,
										n = t.user,
										r = t.admin,
										s = o.a.createElement(
											"div",
											{
												className: "collapse navbar-collapse",
												id: "mobile-nav",
											},
											(function (e) {
												return e
													? o.a.createElement(
															"ul",
															{ className: "navbar-nav mr-auto" },
															o.a.createElement(
																"li",
																{ className: "nav-item" },
																o.a.createElement(
																	d.b,
																	{ className: "nav-link", to: "/profiles" },
																	"Profiles CV"
																)
															),
															o.a.createElement(
																"li",
																{ className: "nav-item" },
																o.a.createElement(
																	d.b,
																	{ className: "nav-link", to: "/dashboard" },
																	"Dashboard"
																)
															),
															o.a.createElement(
																"li",
																{ className: "nav-item" },
																o.a.createElement(
																	d.b,
																	{ className: "nav-link", to: "/automation" },
																	"Data flow"
																)
															),
															o.a.createElement(
																"li",
																{ className: "nav-item" },
																o.a.createElement(
																	d.b,
																	{ className: "nav-link", to: "/joinChat" },
																	"Join To Chat"
																)
															),
															o.a.createElement(
																"li",
																{ className: "nav-item" },
																o.a.createElement(
																	d.b,
																	{ className: "nav-link", to: "/timer" },
																	"Timer"
																)
															),
															o.a.createElement(
																"li",
																{ className: "nav-item" },
																o.a.createElement(
																	d.b,
																	{ className: "nav-link", to: "/pomodoro" },
																	"Pomodoro"
																)
															),
															o.a.createElement(
																"li",
																{ className: "nav-item" },
																o.a.createElement(
																	d.b,
																	{ className: "nav-link", to: "/draggable" },
																	"Draggable"
																)
															)
													  )
													: null;
											})(r),
											o.a.createElement(
												"ul",
												{ className: "navbar-nav ml-auto" },
												o.a.createElement(
													"li",
													{ className: "nav-item" },
													o.a.createElement(
														d.b,
														{ className: "nav-link", to: "/dashboard" },
														o.a.createElement("i", {
															className: "fas fa-user-circle mr-1",
														}),
														n.fullName
													)
												),
												o.a.createElement(
													"li",
													{ className: "nav-item" },
													o.a.createElement(
														d.b,
														{
															className: "nav-link",
															to: "/logout",
															onClick: this.logout.bind(this),
														},
														"Logout"
													)
												)
											)
										),
										i = o.a.createElement(
											"div",
											{
												className: "collapse navbar-collapse",
												id: "mobile-nav",
											},
											o.a.createElement(
												"ul",
												{ className: "navbar-nav ml-auto" },
												o.a.createElement(
													"li",
													{ className: "nav-item" },
													o.a.createElement(
														d.b,
														{ className: "nav-link", to: "/register" },
														"Sign Up"
													)
												),
												o.a.createElement(
													"li",
													{ className: "nav-item" },
													o.a.createElement(
														d.b,
														{ className: "nav-link", to: "/login" },
														"Login"
													)
												)
											)
										);
									return null;
								},
							},
						]),
						t
					);
				})(r.Component),
				A = Object(h.b)(
					function (e) {
						return { security: e.security };
					},
					{ logout: I }
				)(D),
				R = (a(178), a(35)),
				B = a(17),
				L = a(10),
				F = a(12),
				M = a.n(F),
				U = function (e) {
					var t = (function (t) {
						function a() {
							return (
								Object(c.a)(this, a),
								Object(m.a)(this, Object(u.a)(a).apply(this, arguments))
							);
						}
						return (
							Object(p.a)(a, t),
							Object(l.a)(a, [
								{
									key: "render",
									value: function () {
										if ((this.props.match.params || !1).id)
											return o.a.createElement(e, this.props);
										switch ((this.props.security || !1).validToken) {
											case !1:
												return o.a.createElement(R.a, { to: "/" });
											case null:
												return o.a.createElement("div", null, "Loading... ");
											default:
												return o.a.createElement(e, this.props);
										}
									},
								},
							]),
							a
						);
					})(r.Component);
					return Object(h.b)(function (e) {
						return { security: e.security };
					})(t);
				},
				q = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								projectName: "",
								projectIdentifier: "",
								description: "",
								start_date: "",
								end_date: "",
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									console.log(e),
										e.errors && this.setState({ errors: e.errors });
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										projectName: this.state.projectName,
										projectIdentifier: this.state.projectIdentifier,
										description: this.state.description,
										start_date: this.state.start_date,
										end_date: this.state.end_date,
									};
									console.log(t),
										this.props.createProject(t, this.props.history);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										null,
										o.a.createElement(
											"div",
											{ className: "project" },
											o.a.createElement(
												"div",
												{ className: "container" },
												o.a.createElement(
													"div",
													{ className: "row" },
													o.a.createElement(
														"div",
														{ className: "col-md-8 m-auto" },
														o.a.createElement(
															"h5",
															{ className: "display-4 text-center" },
															"Create Project form"
														),
														o.a.createElement("hr", null),
														o.a.createElement(
															"form",
															{ onSubmit: this.onSubmit },
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("input", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": e.projectName }
																	),
																	placeholder: "Project Name",
																	name: "projectName",
																	value: this.state.projectName,
																	onChange: this.onChange,
																}),
																e.projectName &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		e.projectName
																	)
															),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("input", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": e.projectIdentifier }
																	),
																	placeholder: "Unique Project ID",
																	name: "projectIdentifier",
																	value: this.state.projectIdentifier,
																	onChange: this.onChange,
																}),
																e.projectIdentifier &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		e.projectIdentifier
																	)
															),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": e.description }
																	),
																	placeholder: "Project Description",
																	name: "description",
																	value: this.state.description,
																	onChange: this.onChange,
																}),
																e.description &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		e.description
																	)
															),
															o.a.createElement("h6", null, "Start Date"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("input", {
																	type: "date",
																	className: "form-control form-control-lg",
																	name: "start_date",
																	value: this.state.start_date,
																	onChange: this.onChange,
																})
															),
															o.a.createElement(
																"h6",
																null,
																"Estimated End Date"
															),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("input", {
																	type: "date",
																	className: "form-control form-control-lg",
																	name: "end_date",
																	value: this.state.end_date,
																	onChange: this.onChange,
																})
															),
															o.a.createElement("input", {
																type: "submit",
																className: "btn btn-primary btn-block mt-4",
															})
														)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				G = Object(h.b)(
					function (e) {
						return { errors: e.errors };
					},
					{ createProject: k }
				)(U(q)),
				W = a(30),
				Y = a(136),
				z = {},
				H = a(15),
				J = { projects: [], project: {} },
				K = {
					project_tasks: [],
					project_task: {},
					automation_tasks: [],
					automation_task: {},
					all_operations: {},
					currentQuoteIndex: 0,
					quote: null,
				},
				V = [
					"It\u2019s not who I am underneath, but what I do that defines me.",
					"Everything\u2019s impossible until somebody does it.",
					"Why do we fall? So that we can learn to pick ourselves back up.",
					"Our greatest glory is not in ever falling, but in rising every time we fall.",
					"If you kill a killer, the number of killers in the room remains the same.",
					"Sometimes the truth isn\u2019t good enough, sometimes people need more.",
					"A hero can be anyone, even a man doing something as simple as reassuring putting a coat on a young boy\u2019s shoulders.",
				],
				X = { validToken: !1, user: {} },
				Q = function (e) {
					return !!e;
				},
				$ = { profiles: [], profile: {} },
				Z = { profile_tasks: [], profile_task: {} },
				ee = Object(W.c)({
					errors: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: z,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case y:
								return t.payload;
							default:
								return e;
						}
					},
					project: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: J,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case "GET_PROJECTS":
								return Object(H.a)({}, e, { projects: t.payload });
							case "GET_PROJECT":
								return Object(H.a)({}, e, { project: t.payload });
							case "DELETE_PROJECT":
								return Object(H.a)({}, e, {
									projects: e.projects.filter(function (e) {
										return e.projectIdentifier !== t.payload;
									}),
								});
							default:
								return e;
						}
					},
					backlog: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: K,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case "GET_BACKLOG_PROJECT_TASK":
								return Object(H.a)({}, e, { project_tasks: t.payload });
							case "GET_PROJECT_TASK":
								return Object(H.a)({}, e, { project_task: t.payload });
							case "DELETE_PROJECT_TASK":
								return Object(H.a)({}, e, {
									project_tasks: e.project_tasks.filter(function (e) {
										return e.projectSequence !== t.payload;
									}),
								});
							case "GET_BACKLOG_AUTOMATION_TASK":
								return Object(H.a)({}, e, { automation_tasks: t.payload });
							case "GET_AUTOMATION_TASK":
								return Object(H.a)({}, e, { automation_task: t.payload });
							case "DELETE_AUTOMATION_TASK":
								return Object(H.a)({}, e, {
									automation_tasks: e.automation_tasks.filter(function (e) {
										return e.projectSequence !== t.payload;
									}),
								});
							case "UPDATE_STATUS_RSOCKET":
								return Object(H.a)({}, e, {
									automation_tasks: e.automation_tasks.map(function (e, a) {
										return e.projectSequence === t.payload.projectSequence &&
											e.status !== t.payload.status
											? Object(H.a)({}, e, { status: t.payload.status })
											: e;
									}),
								});
							case "GET_AUTOMATION_ALL_OPERATIONS":
								return Object(H.a)({}, e, {
									all_operations: t.payload.map(function (e) {
										return { value: e[0], label: e[1] };
									}),
								});
							case "GET_AUTOMATION_BY_OPERATIONS":
								return Object(H.a)({}, e, { automation_tasks: t.payload });
							case "CHANGE_QUOTE":
								var a = e.currentQuoteIndex + 1;
								return {
									currentQuoteIndex: (a = a === V.length ? 0 : a),
									quote: V[a],
								};
							default:
								return e;
						}
					},
					security: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: X,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case "SET_CURRENT_USER":
								return Object(H.a)({}, e, {
									validToken: Q(t.payload),
									admin: !0,
									user: t.payload,
								});
							default:
								return e;
						}
					},
					profile: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: $,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case "GET_PROFILES":
								return Object(H.a)({}, e, { profiles: t.payload });
							case "GET_PROFILE":
								return Object(H.a)({}, e, { profile: t.payload });
							case "DELETE_PROFILE":
								return Object(H.a)({}, e, {
									profiles: e.profiles.filter(function (e) {
										return e.profileIdentifier !== t.payload;
									}),
								});
							case "SET_PROFILE_STAGED":
								return (
									console.log(t.payload),
									Object(H.a)({}, e, {
										profile: Object(H.a)({}, e.profile, {
											summary: t.payload.summary,
											typeProfile: t.payload.typeProfile,
										}),
									})
								);
							default:
								return e;
						}
					},
					profileBacklog: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: Z,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case "GET_PROFILE_BACKLOG":
								return Object(H.a)({}, e, { profile_tasks: t.payload });
							case "GET_PROFILE_TASK":
								return Object(H.a)({}, e, { profile_task: t.payload });
							case "DELETE_PROFILE_TASK":
								return Object(H.a)({}, e, {
									profile_tasks: e.profile_tasks.filter(function (e) {
										return e.profileSequence !== t.payload;
									}),
								});
							default:
								return e;
						}
					},
				}),
				te = {},
				ae = [Y.a],
				ne =
					window.__REDUX_DEVTOOLS_EXTENSION__ &&
					window.__REDUX_DEVTOOLS_EXTENSION__(),
				re =
					window.navigator.userAgent.includes("Chrome") && ne
						? Object(W.e)(ee, te, Object(W.d)(W.a.apply(void 0, ae), ne))
						: Object(W.e)(ee, te, Object(W.d)(W.a.apply(void 0, ae))),
				oe = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								projectName: "",
								projectIdentifier: "",
								description: "",
								start_date: "",
								end_date: "",
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
									var t = e.project,
										a = t.id,
										n = t.projectName,
										r = t.projectIdentifier,
										o = t.description,
										s = t.start_date,
										i = t.end_date;
									this.setState({
										id: a,
										projectName: n,
										projectIdentifier: r,
										description: o,
										start_date: s,
										end_date: i,
									});
								},
							},
							{
								key: "componentDidMount",
								value: function () {
									var e = this.props.match.params.id;
									this.props.getProject(e, this.props.history);
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										id: this.state.id,
										projectName: this.state.projectName,
										projectIdentifier: this.state.projectIdentifier,
										description: this.state.description,
										start_date: this.state.start_date,
										end_date: this.state.end_date,
									};
									this.props.createProject(t, this.props.history);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "project" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														"h5",
														{ className: "display-4 text-center" },
														"Update Project form"
													),
													o.a.createElement("hr", null),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()(
																	"form-control form-control-lg ",
																	{ "is-invalid": e.projectName }
																),
																placeholder: "Project Name",
																name: "projectName",
																onChange: this.onChange,
																value: this.state.projectName,
															}),
															e.projectName &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.projectName
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: "form-control form-control-lg",
																placeholder: "Unique Project ID",
																name: "projectIdentifier",
																onChange: this.onChange,
																value: this.state.projectIdentifier,
																disabled: !0,
															})
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.description,
																}),
																placeholder: "Project Description",
																name: "description",
																onChange: this.onChange,
																value: this.state.description,
															}),
															e.description &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.description
																)
														),
														o.a.createElement("h6", null, "Start Date"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "date",
																className: "form-control form-control-lg",
																name: "start_date",
																onChange: this.onChange,
																value: this.state.start_date,
															})
														),
														o.a.createElement("h6", null, "Estimated End Date"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "date",
																className: "form-control form-control-lg",
																name: "end_date",
																onChange: this.onChange,
																value: this.state.end_date,
															})
														),
														o.a.createElement("input", {
															type: "submit",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				se = Object(h.b)(
					function (e) {
						return { project: e.project.project, errors: e.errors };
					},
					{
						getProject: function (e, t) {
							return (function () {
								var a = Object(E.a)(
									v.a.mark(function a(n) {
										var r;
										return v.a.wrap(
											function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(a.prev = 0),
																(a.next = 3),
																b.a.get("/api/project/".concat(e))
															);
														case 3:
															(r = a.sent),
																n({ type: "GET_PROJECT", payload: r.data }),
																(a.next = 10);
															break;
														case 7:
															(a.prev = 7),
																(a.t0 = a.catch(0)),
																t.push("/dashboard");
														case 10:
														case "end":
															return a.stop();
													}
											},
											a,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return a.apply(this, arguments);
								};
							})();
						},
						createProject: k,
					}
				)(U(oe)),
				ie = function (e) {
					return (function () {
						var t = Object(E.a)(
							v.a.mark(function t(a) {
								var n;
								return v.a.wrap(
									function (t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													return (
														(t.prev = 0),
														(t.next = 3),
														b.a.get("/api/operations/".concat(e))
													);
												case 3:
													(n = t.sent),
														a({
															type: "GET_AUTOMATION_ALL_OPERATIONS",
															payload: n.data,
														}),
														(t.next = 11);
													break;
												case 7:
													(t.prev = 7),
														(t.t0 = t.catch(0)),
														console.log(t.t0),
														t.t0.response && t.t0.response.data
															? a({ type: y, payload: t.t0.response.data })
															: a({ type: y, payload: t.t0 });
												case 11:
												case "end":
													return t.stop();
											}
									},
									t,
									null,
									[[0, 7]]
								);
							})
						);
						return function (e) {
							return t.apply(this, arguments);
						};
					})();
				},
				ce = function (e, t) {
					return (function () {
						var a = Object(E.a)(
							v.a.mark(function a(n) {
								var r;
								return v.a.wrap(
									function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													return (
														(a.prev = 0),
														(a.next = 3),
														b.a.get(
															"/api/operations/testCasesByOperation/"
																.concat(e, "/")
																.concat(t)
														)
													);
												case 3:
													(r = a.sent).data || (r.data = []),
														n({
															type: "GET_AUTOMATION_BY_OPERATIONS",
															payload: r.data,
														}),
														(a.next = 11);
													break;
												case 7:
													(a.prev = 7),
														(a.t0 = a.catch(0)),
														console.log(a.t0),
														a.t0.response && a.t0.response.data
															? n({ type: y, payload: a.t0.response.data })
															: n({ type: y, payload: a.t0 });
												case 11:
												case "end":
													return a.stop();
											}
									},
									a,
									null,
									[[0, 7]]
								);
							})
						);
						return function (e) {
							return a.apply(this, arguments);
						};
					})();
				},
				le = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "onDeleteClick",
								value: function (e, t) {
									this.props.deleteProjectTask(e, t);
								},
							},
							{
								key: "render",
								value: function () {
									var e,
										t,
										a = this.props.project_task;
									return (
										1 === a.priority &&
											((t = "bg-danger text-light"), (e = "HIGH")),
										2 === a.priority &&
											((t = "bg-warning text-light"), (e = "MEDIUM")),
										3 === a.priority &&
											((t = "bg-info text-light"), (e = "LOW")),
										o.a.createElement(
											"div",
											{ className: "card mb-1 bg-light" },
											o.a.createElement(
												"div",
												{ className: "card-header text-primary ".concat(t) },
												"ID: ",
												a.projectSequence,
												" -- Priority: ",
												e
											),
											o.a.createElement(
												"div",
												{ className: "card-body bg-light" },
												o.a.createElement(
													"h5",
													{ className: "card-title" },
													a.summary
												),
												o.a.createElement(
													"p",
													{ className: "card-text text-truncate " },
													a.acceptanceCriteria
												),
												o.a.createElement(
													d.b,
													{
														to: "/updateProjectTask/"
															.concat(a.projectIdentifier, "/")
															.concat(a.projectSequence),
														className: "btn btn-primary",
													},
													"View / Update"
												),
												o.a.createElement(
													"button",
													{
														className: "btn btn-danger ml-4",
														onClick: this.onDeleteClick.bind(
															this,
															a.projectIdentifier,
															a.projectSequence
														),
													},
													"Delete"
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				me = Object(h.b)(null, {
					deleteProjectTask: function (e, t) {
						return (function () {
							var a = Object(E.a)(
								v.a.mark(function a(n) {
									return v.a.wrap(function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													if (
														!window.confirm(
															"You are deleting project task ".concat(
																t,
																", this action cannot be undone"
															)
														)
													) {
														a.next = 4;
														break;
													}
													return (
														(a.next = 3),
														b.a.delete(
															"/api/backlog/projectTask/"
																.concat(e, "/")
																.concat(t)
														)
													);
												case 3:
													n({ type: "DELETE_PROJECT_TASK", payload: t });
												case 4:
												case "end":
													return a.stop();
											}
									}, a);
								})
							);
							return function (e) {
								return a.apply(this, arguments);
							};
						})();
					},
				})(le),
				ue = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									for (
										var e = this.props.project_tasks_prop.map(function (e) {
												return o.a.createElement(me, {
													key: e.id,
													project_task: e,
												});
											}),
											t = [],
											a = [],
											n = [],
											r = 0;
										r < e.length;
										r++
									)
										"TO_DO" === e[r].props.project_task.status && t.push(e[r]),
											"IN_PROGRESS" === e[r].props.project_task.status &&
												a.push(e[r]),
											"DONE" === e[r].props.project_task.status && n.push(e[r]);
									return o.a.createElement(
										"div",
										{ className: "container" },
										o.a.createElement(
											"div",
											{ className: "row" },
											o.a.createElement(
												"div",
												{ className: "col-md-4" },
												o.a.createElement(
													"div",
													{ className: "card text-center mb-2" },
													o.a.createElement(
														"div",
														{
															className: "card-header bg-secondary text-white",
														},
														o.a.createElement("h3", null, "TO DO")
													)
												),
												t
											),
											o.a.createElement(
												"div",
												{ className: "col-md-4" },
												o.a.createElement(
													"div",
													{ className: "card text-center mb-2" },
													o.a.createElement(
														"div",
														{ className: "card-header bg-primary text-white" },
														o.a.createElement("h3", null, "In Progress")
													)
												),
												a
											),
											o.a.createElement(
												"div",
												{ className: "col-md-4" },
												o.a.createElement(
													"div",
													{ className: "card text-center mb-2" },
													o.a.createElement(
														"div",
														{ className: "card-header bg-success text-white" },
														o.a.createElement("h3", null, "Done")
													)
												),
												n
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				pe = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								errors: {},
							}),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									var e = this.props.match.params.id;
									this.props.getBacklogProjectTask(e);
								},
							},
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
								},
							},
							{
								key: "render",
								value: function () {
									var e,
										t = this.props.match.params.id,
										a = this.props.backlog.project_tasks;
									return (
										(e = (function (e, t) {
											return t.length < 1
												? e.projectNotFound
													? o.a.createElement(
															"div",
															{
																className: "alert alert-danger text-center",
																role: "alert",
															},
															e.projectNotFound
													  )
													: e.projectIdentifier
													? o.a.createElement(
															"div",
															{
																className: "alert alert-danger text-center",
																role: "alert",
															},
															e.projectIdentifier
													  )
													: o.a.createElement(
															"div",
															{
																className: "alert alert-info text-center",
																role: "alert",
															},
															"No Project Tasks on this board"
													  )
												: o.a.createElement(ue, { project_tasks_prop: t });
										})(this.state.errors, a)),
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												d.b,
												{
													to: "/addProjectTask/".concat(t),
													className: "btn btn-primary mb-3",
												},
												o.a.createElement(
													"i",
													{ className: "fas fa-plus-circle" },
													" Create Project Task"
												)
											),
											o.a.createElement("br", null),
											o.a.createElement("hr", null),
											e
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				de = Object(h.b)(
					function (e) {
						return { backlog: e.backlog, errors: e.errors };
					},
					{
						getBacklogProjectTask: function (e) {
							return (function () {
								var t = Object(E.a)(
									v.a.mark(function t(a) {
										var n;
										return v.a.wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.prev = 0),
																(t.next = 3),
																b.a.get("/api/backlog/projectTask/".concat(e))
															);
														case 3:
															(n = t.sent),
																a({
																	type: "GET_BACKLOG_PROJECT_TASK",
																	payload: n.data,
																}),
																(t.next = 10);
															break;
														case 7:
															(t.prev = 7),
																(t.t0 = t.catch(0)),
																a({ type: y, payload: t.t0.response.data });
														case 10:
														case "end":
															return t.stop();
													}
											},
											t,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return t.apply(this, arguments);
								};
							})();
						},
					}
				)(pe),
				he = (function (e) {
					function t(e) {
						var a;
						Object(c.a)(this, t);
						var n = (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).props
							.match.params.id;
						return (
							(a.state = {
								summary: "",
								acceptanceCriteria: "",
								status: "",
								priority: 0,
								dueDate: "",
								projectIdentifier: n,
								errors: {},
							}),
							(a.onChange = a.onChange.bind(Object(L.a)(a))),
							(a.onSubmit = a.onSubmit.bind(Object(L.a)(a))),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										summary: this.state.summary,
										acceptanceCriteria: this.state.acceptanceCriteria,
										status: this.state.status,
										priority: this.state.priority,
										dueDate: this.state.dueDate,
									};
									this.props.addProjectTask(
										this.state.projectIdentifier,
										t,
										this.props.history
									);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props.match.params.id,
										t = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/projectBoard/".concat(e),
															className: "btn btn-light",
														},
														"Back to Project Board"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														"Add Project Task"
													),
													o.a.createElement(
														"p",
														{ className: "lead text-center" },
														"Project Identifier: ",
														this.state.projectIdentifier,
														" "
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": t.summary,
																}),
																name: "summary",
																placeholder: "Project Task summary",
																value: this.state.summary,
																onChange: this.onChange,
															}),
															t.summary &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	t.summary
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																className: "form-control form-control-lg",
																placeholder: "Acceptance Criteria",
																name: "acceptanceCriteria",
																value: this.state.acceptanceCriteria,
																onChange: this.onChange,
															})
														),
														o.a.createElement("h6", null, "Due Date"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "date",
																className: "form-control form-control-lg",
																name: "dueDate",
																value: this.state.dueDate,
																onChange: this.onChange,
															})
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "priority",
																	value: this.state.priority,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: 0 },
																	"Select Priority"
																),
																o.a.createElement(
																	"option",
																	{ value: 1 },
																	"High"
																),
																o.a.createElement(
																	"option",
																	{ value: 2 },
																	"Medium"
																),
																o.a.createElement("option", { value: 3 }, "Low")
															)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "status",
																	value: this.state.status,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: "" },
																	"Select Status"
																),
																o.a.createElement(
																	"option",
																	{ value: "TO_DO" },
																	"TO DO"
																),
																o.a.createElement(
																	"option",
																	{ value: "IN_PROGRESS" },
																	"IN PROGRESS"
																),
																o.a.createElement(
																	"option",
																	{ value: "DONE" },
																	"DONE"
																)
															)
														),
														o.a.createElement("input", {
															type: "submit",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				fe = Object(h.b)(
					function (e) {
						return { errors: e.errors };
					},
					{
						addProjectTask: function (e, t, a) {
							return (function () {
								var n = Object(E.a)(
									v.a.mark(function n(r) {
										return v.a.wrap(
											function (n) {
												for (;;)
													switch ((n.prev = n.next)) {
														case 0:
															return (
																(n.prev = 0),
																(n.next = 3),
																b.a.post(
																	"/api/backlog/projectTask/".concat(e),
																	t
																)
															);
														case 3:
															a.push("/projectBoard/".concat(e)),
																r({ type: y, payload: {} }),
																(n.next = 10);
															break;
														case 7:
															(n.prev = 7),
																(n.t0 = n.catch(0)),
																r({ type: y, payload: n.t0.response.data });
														case 10:
														case "end":
															return n.stop();
													}
											},
											n,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return n.apply(this, arguments);
								};
							})();
						},
					}
				)(he),
				ve = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								projectSequence: "",
								summary: "",
								acceptanceCriteria: "",
								status: "",
								priority: "",
								dueDate: "",
								projectIdentifier: "",
								create_At: "",
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									var e = this.props.match.params,
										t = e.backlog_id,
										a = e.pt_id;
									this.props.getProjectTask(t, a, this.props.history);
								},
							},
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
									var t = e.project_task,
										a = t.id,
										n = t.projectSequence,
										r = t.summary,
										o = t.acceptanceCriteria,
										s = t.status,
										i = t.priority,
										c = t.dueDate,
										l = t.projectIdentifier,
										m = t.create_At;
									this.setState({
										id: a,
										projectSequence: n,
										summary: r,
										acceptanceCriteria: o,
										status: s,
										priority: i,
										dueDate: c,
										projectIdentifier: l,
										create_At: m,
									});
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										id: this.state.id,
										projectSequence: this.state.projectSequence,
										summary: this.state.summary,
										acceptanceCriteria: this.state.acceptanceCriteria,
										status: this.state.status,
										priority: this.state.priority,
										dueDate: this.state.dueDate,
										projectIdentifier: this.state.projectIdentifier,
										create_At: this.state.create_At,
									};
									this.props.updateProjectTask(
										this.state.projectIdentifier,
										this.state.projectSequence,
										t,
										this.props.history
									);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/projectBoard/".concat(
																this.state.projectIdentifier
															),
															className: "btn btn-light",
														},
														"Back to Project Board"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														"Update Project Task"
													),
													o.a.createElement(
														"p",
														{ className: "lead text-center" },
														"Project Name: ",
														this.state.projectIdentifier,
														" | Project Task ID:",
														" ",
														this.state.projectSequence,
														" "
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.summary,
																}),
																name: "summary",
																placeholder: "Project Task summary",
																value: this.state.summary,
																onChange: this.onChange,
															}),
															e.summary &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.summary
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																className: "form-control form-control-lg",
																placeholder: "Acceptance Criteria",
																name: "acceptanceCriteria",
																value: this.state.acceptanceCriteria,
																onChange: this.onChange,
															})
														),
														o.a.createElement("h6", null, "Due Date"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "date",
																className: "form-control form-control-lg",
																name: "dueDate",
																value: this.state.dueDate,
																onChange: this.onChange,
															})
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "priority",
																	value: this.state.priority,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: 0 },
																	"Select Priority"
																),
																o.a.createElement(
																	"option",
																	{ value: 1 },
																	"High"
																),
																o.a.createElement(
																	"option",
																	{ value: 2 },
																	"Medium"
																),
																o.a.createElement("option", { value: 3 }, "Low")
															)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "status",
																	value: this.state.status,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: "" },
																	"Select Status"
																),
																o.a.createElement(
																	"option",
																	{ value: "TO_DO" },
																	"TO DO"
																),
																o.a.createElement(
																	"option",
																	{ value: "IN_PROGRESS" },
																	"IN PROGRESS"
																),
																o.a.createElement(
																	"option",
																	{ value: "DONE" },
																	"DONE"
																)
															)
														),
														o.a.createElement("input", {
															type: "submit",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Ee = Object(h.b)(
					function (e) {
						return { project_task: e.backlog.project_task, errors: e.errors };
					},
					{
						getProjectTask: function (e, t, a) {
							return (function () {
								var n = Object(E.a)(
									v.a.mark(function n(r) {
										var o;
										return v.a.wrap(
											function (n) {
												for (;;)
													switch ((n.prev = n.next)) {
														case 0:
															return (
																(n.prev = 0),
																(n.next = 3),
																b.a.get(
																	"/api/backlog/projectTask/"
																		.concat(e, "/")
																		.concat(t)
																)
															);
														case 3:
															(o = n.sent),
																r({
																	type: "GET_PROJECT_TASK",
																	payload: o.data,
																}),
																(n.next = 10);
															break;
														case 7:
															(n.prev = 7),
																(n.t0 = n.catch(0)),
																a.push("/dashboard");
														case 10:
														case "end":
															return n.stop();
													}
											},
											n,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return n.apply(this, arguments);
								};
							})();
						},
						updateProjectTask: function (e, t, a, n) {
							return (function () {
								var r = Object(E.a)(
									v.a.mark(function r(o) {
										return v.a.wrap(
											function (r) {
												for (;;)
													switch ((r.prev = r.next)) {
														case 0:
															return (
																(r.prev = 0),
																(r.next = 3),
																b.a.patch(
																	"/api/backlog/projectTask/"
																		.concat(e, "/")
																		.concat(t),
																	a
																)
															);
														case 3:
															n.push("/projectBoard/".concat(e)),
																o({ type: y, payload: {} }),
																(r.next = 10);
															break;
														case 7:
															(r.prev = 7),
																(r.t0 = r.catch(0)),
																o({ type: y, payload: r.t0.response.data });
														case 10:
														case "end":
															return r.stop();
													}
											},
											r,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return r.apply(this, arguments);
								};
							})();
						},
					}
				)(ve),
				ge = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									this.props.security.validToken &&
										this.props.history.push("/Home");
								},
							},
							{
								key: "render",
								value: function () {
									return o.a.createElement(
										"div",
										{ className: "landing" },
										o.a.createElement(
											"div",
											{ className: "light-overlay landing-inner text-dark" },
											o.a.createElement(
												"div",
												{ className: "container" },
												o.a.createElement(
													"div",
													{ className: "row" },
													o.a.createElement(
														"div",
														{ className: "col-md-12 text-center" },
														o.a.createElement(
															"h1",
															{ className: "display-3 mb-4" },
															"Parabéns pela aquisição do e-book, você o receberá por e-mail em breve. Management Tool"
														),
														o.a.createElement(
															"p",
															{ className: "lead" },
															"Create your account to join active projects / automation tests or start your own"
														),
														o.a.createElement("hr", null),
														o.a.createElement(
															d.b,
															{
																className: "btn btn-lg btn-primary mr-2",
																to: "/register",
															},
															"Sign Up"
														),
														o.a.createElement(
															d.b,
															{
																className: "btn btn-lg btn-secondary mr-2",
																to: "/login",
															},
															"Login"
														)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				be = Object(h.b)(function (e) {
					return { security: e.security };
				})(ge),
				ye = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								username: "",
								fullName: "",
								password: "",
								confirmPassword: "",
								errors: {},
								security: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									this.props.security.validToken &&
										this.props.history.push("/dashboard");
								},
							},
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									if (e.errors && e.errors !== this.props.errors) {
										var t = e.security.user;
										t.username &&
										e.security.user.username !==
											this.props.security.user.username
											? this.props.login(t, this.props.history)
											: this.setState({ errors: e.errors });
									} else window.location.href = "/";
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										username: this.state.username,
										fullName: this.state.fullName,
										password: this.state.password,
										confirmPassword: this.state.confirmPassword,
									};
									this.props.createNewUser(t, this.props.history);
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "register" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														"h1",
														{ className: "display-4 text-center" },
														"Sign Up"
													),
													o.a.createElement(
														"p",
														{ className: "lead text-center" },
														"Create your Account"
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.fullName,
																}),
																placeholder: "Full Name",
																name: "fullName",
																value: this.state.fullName,
																onChange: this.onChange,
															}),
															e.fullName &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.fullName
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.username,
																}),
																placeholder: "Email Address (Username)",
																name: "username",
																value: this.state.username,
																onChange: this.onChange,
															}),
															e.username &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.username
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "password",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.password,
																}),
																placeholder: "Password",
																name: "password",
																value: this.state.password,
																onChange: this.onChange,
															}),
															e.password &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.password
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "password",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.confirmPassword,
																}),
																placeholder: "Confirm Password",
																name: "confirmPassword",
																value: this.state.confirmPassword,
																onChange: this.onChange,
															}),
															e.confirmPassword &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.confirmPassword
																)
														),
														o.a.createElement("input", {
															type: "submit",
															value: "Create",
															className: "btn btn-info btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				ke = Object(h.b)(
					function (e) {
						return { errors: e.errors, security: e.security };
					},
					{
						createNewUser: function (e, t) {
							return (function () {
								var t = Object(E.a)(
									v.a.mark(function t(a) {
										var n;
										return v.a.wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.prev = 0),
																(t.next = 3),
																b.a.post("/api/users/register", e)
															);
														case 3:
															(n = {
																username: e.username,
																password: e.password,
															}),
																a({ type: "SET_CURRENT_USER", payload: n }),
																a({ type: y, payload: {} }),
																(t.next = 11);
															break;
														case 8:
															(t.prev = 8),
																(t.t0 = t.catch(0)),
																a({ type: y, payload: t.t0.response.data });
														case 11:
														case "end":
															return t.stop();
													}
											},
											t,
											null,
											[[0, 8]]
										);
									})
								);
								return function (e) {
									return t.apply(this, arguments);
								};
							})();
						},
						login: _,
					}
				)(ye),
				Ne = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								username: "",
								password: "",
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									this.props.security.validToken &&
										this.props.history.push("/dashboard");
								},
							},
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.security.validToken &&
										(console.log(
											"Login validToken-WillReceiveProps Called times"
										),
										this.props.history.push("/home")),
										e.errors &&
											e.errors !== this.props.errors &&
											(console.log(
												"Login nextProps.errors-WillReceiveProps Called times"
											),
											this.setState({ errors: e.errors }));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										username: this.state.username,
										password: this.state.password,
									};
									this.props.login(t, this.props.history);
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "login" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														"h1",
														{ className: "display-4 text-center" },
														"Log In"
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.username,
																}),
																placeholder: "Email Address",
																id: "txtUsername",
																name: "username",
																value: this.state.username,
																onChange: this.onChange,
																autoFocus: !0,
															}),
															e.username &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.username
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																id: "txtPassword",
																type: "password",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.password,
																}),
																placeholder: "Password",
																name: "password",
																value: this.state.password,
																onChange: this.onChange,
															}),
															e.password &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.password
																)
														),
														o.a.createElement("input", {
															id: "btnSubmit",
															type: "submit",
															value: "Login",
															className: "btn btn-info btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				je = Object(h.b)(
					function (e) {
						return { security: e.security, errors: e.errors };
					},
					{ login: _ }
				)(Ne),
				Oe = a(146),
				Ce = Object(h.b)(function (e) {
					return { security: e.security };
				})(function (e) {
					var t = e.component,
						a = e.security,
						n = Object(Oe.a)(e, ["component", "security"]);
					return o.a.createElement(
						R.b,
						Object.assign({}, n, {
							render: function (e) {
								return !0 === a.validToken
									? o.a.createElement(t, e)
									: o.a.createElement(R.a, { to: "/login" });
							},
						})
					);
				}),
				Se = function (e, t) {
					return (function () {
						var a = Object(E.a)(
							v.a.mark(function a(n) {
								return v.a.wrap(
									function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													return (
														(a.prev = 0),
														(a.next = 3),
														b.a.post("/api/profile", e)
													);
												case 3:
													t.push("/profiles"),
														n({ type: y, payload: {} }),
														(a.next = 11);
													break;
												case 7:
													(a.prev = 7),
														(a.t0 = a.catch(0)),
														t.push("/infoPage/".concat(e.profileIdentifier)),
														n({ type: y, payload: a.t0.response.data });
												case 11:
												case "end":
													return a.stop();
											}
									},
									a,
									null,
									[[0, 7]]
								);
							})
						);
						return function (e) {
							return a.apply(this, arguments);
						};
					})();
				},
				xe = (function (e) {
					function t() {
						var e, a;
						Object(c.a)(this, t);
						for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
							r[o] = arguments[o];
						return (
							((a = Object(m.a)(
								this,
								(e = Object(u.a)(t)).call.apply(e, [this].concat(r))
							)).onDeleteClick = function (e) {
								a.props.deleteProfile(e);
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									var e = this.props.profile;
									return o.a.createElement(
										"div",
										{ className: "container" },
										o.a.createElement(
											"div",
											{ className: "card card-body bg-light mb-3" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-2" },
													o.a.createElement(
														"span",
														{ className: "mx-auto" },
														e.fullName
													)
												),
												o.a.createElement(
													"div",
													{ className: "col-lg-6 col-md-4 col-8" },
													o.a.createElement("h3", null, e.fullName),
													o.a.createElement("p", null, e.candidateEmail)
												),
												o.a.createElement(
													"div",
													null,
													o.a.createElement(
														"ul",
														{ className: "list-group" },
														o.a.createElement(
															d.b,
															{
																to: "/editcv/".concat(e.profileIdentifier),
																style: e.token
																	? null
																	: { pointerEvents: "none" },
															},
															o.a.createElement(
																"li",
																{ className: "list-group-item board" },
																o.a.createElement(
																	"i",
																	{
																		className: "fa fa-flag-checkered pr-1",
																		style: e.token
																			? null
																			: { color: "#dddddd" },
																	},
																	" ",
																	"Open CV"
																)
															)
														),
														this.props.security.admin &&
															o.a.createElement(
																d.b,
																{
																	to: "/updateProfile/".concat(
																		e.profileIdentifier
																	),
																	style: e.token
																		? { pointerEvents: "none" }
																		: null,
																},
																o.a.createElement(
																	"li",
																	{ className: "list-group-item update" },
																	o.a.createElement(
																		"i",
																		{
																			className: "fa fa-edit pr-1",
																			style: e.token
																				? { color: "#dddddd" }
																				: null,
																		},
																		" ",
																		"Token"
																	)
																)
															),
														o.a.createElement(
															"li",
															{
																className: "list-group-item delete",
																onClick: this.onDeleteClick.bind(
																	this,
																	e.profileIdentifier
																),
															},
															o.a.createElement(
																"i",
																{ className: "fa fa-minus-circle pr-1" },
																" Delete"
															)
														)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Te = Object(h.b)(
					function (e) {
						return { security: e.security };
					},
					{
						deleteProfile: function (e) {
							return (function () {
								var t = Object(E.a)(
									v.a.mark(function t(a) {
										return v.a.wrap(function (t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														if (
															!window.confirm(
																"Are you sure? This will delete the project and all the data related to it"
															)
														) {
															t.next = 4;
															break;
														}
														return (
															(t.next = 3),
															b.a.delete("/api/profile/".concat(e))
														);
													case 3:
														a({ type: "DELETE_PROFILE", payload: e });
													case 4:
													case "end":
														return t.stop();
												}
										}, t);
									})
								);
								return function (e) {
									return t.apply(this, arguments);
								};
							})();
						},
					}
				)(xe),
				we = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									this.props.security.validToken
										? this.props.getProfiles()
										: this.props.history.push("/");
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props.profile.profiles;
									return o.a.createElement(
										"div",
										{ className: "profiles" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-12" },
													o.a.createElement(
														"h1",
														{ className: "display-4 text-center" },
														"Profiles CV/Resume"
													),
													o.a.createElement("br", null),
													o.a.createElement(O, {
														link: "/addProfile",
														caption: "Create a Profile",
														cssClass: "btn btn-lg btn-info",
													}),
													o.a.createElement("br", null),
													o.a.createElement("hr", null),
													e.map(function (e) {
														return o.a.createElement(Te, {
															key: e.id,
															profile: e,
														});
													})
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Pe = Object(h.b)(
					function (e) {
						return { profile: e.profile, security: e.security };
					},
					{
						getProfiles: function () {
							return (function () {
								var e = Object(E.a)(
									v.a.mark(function e(t) {
										var a;
										return v.a.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(e.prev = 0),
																(e.next = 3),
																b.a.get("/api/profile/all")
															);
														case 3:
															(a = e.sent),
																t({ type: "GET_PROFILES", payload: a.data }),
																t({ type: y, payload: {} }),
																(e.next = 11);
															break;
														case 8:
															(e.prev = 8),
																(e.t0 = e.catch(0)),
																t({ type: y, payload: e.t0.response.data });
														case 11:
														case "end":
															return e.stop();
													}
											},
											e,
											null,
											[[0, 8]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})();
						},
					}
				)(we),
				_e = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								fullName: "",
								candidateEmail: "",
								profileIdentifier: "",
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									console.log(e),
										e.errors && this.setState({ errors: e.errors });
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										fullName: this.state.fullName,
										candidateEmail: this.state.candidateEmail,
									};
									this.props.createProfile(t, this.props.history);
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "register" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														"h1",
														{ className: "display-4 text-center" },
														"Register New Candidate"
													),
													o.a.createElement(
														"p",
														{ className: "lead text-center" },
														"Create a Profile"
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.fullName,
																}),
																placeholder: "Full Name",
																name: "fullName",
																value: this.state.fullName,
																onChange: this.onChange,
																autoFocus: !0,
															}),
															e.fullName &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.fullName
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.candidateEmail,
																}),
																placeholder: "Email Address (Candidate Email)",
																name: "candidateEmail",
																value: this.state.candidateEmail,
																onChange: this.onChange,
															}),
															e.candidateEmail &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.candidateEmail
																)
														),
														o.a.createElement("input", {
															type: "submit",
															className: "btn btn-info btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Ie = Object(h.b)(
					function (e) {
						return { errors: e.errors };
					},
					{ createProfile: Se }
				)(U(_e)),
				De = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								fullName: "",
								candidateEmail: "",
								profileIdentifier: "",
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
									var t = e.profile,
										a = t.id,
										n = t.fullName,
										r = t.candidateEmail,
										o = t.profileIdentifier;
									this.setState({
										id: a,
										fullName: n,
										candidateEmail: r,
										profileIdentifier: o,
									});
								},
							},
							{
								key: "componentDidMount",
								value: function () {
									var e = this.props.match.params.id;
									this.props.getProfile(e, this.props.history);
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										id: this.state.id,
										fullName: this.state.fullName,
										candidateEmail: this.state.candidateEmail,
										profileIdentifier: this.state.profileIdentifier,
									};
									this.props.createProfile(t, this.props.history);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "profile" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{ to: "/profiles", className: "btn btn-light" },
														"Back to Profiles"
													),
													o.a.createElement(
														"h5",
														{ className: "display-4 text-center" },
														"Generates the Candidate Link"
													),
													o.a.createElement("hr", null),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()(
																	"form-control form-control-lg ",
																	{ "is-invalid": e.fullName }
																),
																placeholder: "Full Name",
																name: "fullName",
																onChange: this.onChange,
																value: this.state.fullName,
															}),
															e.fullName &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.fullName
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: "form-control form-control-lg",
																placeholder: "Candidate e-mail",
																name: "candidateEmail",
																onChange: this.onChange,
																value: this.state.candidateEmail,
																disabled: !0,
															})
														),
														o.a.createElement("input", {
															type: "submit",
															value: this.state.token
																? "The Token was genarated already"
																: "Gen Token",
															className: "btn btn-primary btn-block mt-4",
															style: this.state.token
																? { color: "#dddddd", pointerEvents: "none" }
																: null,
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Ae = Object(h.b)(
					function (e) {
						return { profile: e.profile.profile, errors: e.errors };
					},
					{
						getProfile: function (e, t) {
							return (function () {
								var a = Object(E.a)(
									v.a.mark(function a(n) {
										var r;
										return v.a.wrap(
											function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(a.prev = 0),
																(a.next = 3),
																b.a.get("/api/profile/".concat(e))
															);
														case 3:
															(r = a.sent),
																n({ type: "GET_PROFILE", payload: r.data }),
																(a.next = 11);
															break;
														case 7:
															(a.prev = 7),
																(a.t0 = a.catch(0)),
																t.push("/infoPage/".concat(e)),
																n({ type: y, payload: a.t0.response.data });
														case 11:
														case "end":
															return a.stop();
													}
											},
											a,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return a.apply(this, arguments);
								};
							})();
						},
						createProfile: Se,
					}
				)(U(De)),
				Re = function (e, t, a) {
					return (function () {
						var n = Object(E.a)(
							v.a.mark(function n(r) {
								return v.a.wrap(
									function (n) {
										for (;;)
											switch ((n.prev = n.next)) {
												case 0:
													return (
														(n.prev = 0),
														(n.next = 3),
														b.a.post("/api/cvbacklog/".concat(e), t)
													);
												case 3:
													r({ type: y, payload: {} }),
														a.push("/editcv/".concat(e)),
														(n.next = 11);
													break;
												case 7:
													(n.prev = 7),
														(n.t0 = n.catch(0)),
														(n.t0.response.data.tokenMessage ||
															n.t0.response.data.profileNotfound) &&
															a.push("/infoPage/".concat(e)),
														r({ type: y, payload: n.t0.response.data });
												case 11:
												case "end":
													return n.stop();
											}
									},
									n,
									null,
									[[0, 7]]
								);
							})
						);
						return function (e) {
							return n.apply(this, arguments);
						};
					})();
				},
				Be = function (e, t, a, n) {
					return (function () {
						var r = Object(E.a)(
							v.a.mark(function r(o) {
								return v.a.wrap(
									function (r) {
										for (;;)
											switch ((r.prev = r.next)) {
												case 0:
													return (
														(r.prev = 0),
														(r.next = 3),
														b.a.patch(
															"/api/cvbacklog/".concat(e, "/").concat(t),
															a
														)
													);
												case 3:
													o({ type: "GET_PROFILE_TASK", payload: {} }),
														o({ type: y, payload: {} }),
														n.push("/editcv/".concat(e)),
														(r.next = 11);
													break;
												case 8:
													(r.prev = 8),
														(r.t0 = r.catch(0)),
														r.t0.response && r.t0.response.data
															? o({ type: y, payload: r.t0.response.data })
															: (console.log(r.t0),
															  o({ type: y, payload: r.t0 }));
												case 11:
												case "end":
													return r.stop();
											}
									},
									r,
									null,
									[[0, 8]]
								);
							})
						);
						return function (e) {
							return r.apply(this, arguments);
						};
					})();
				},
				Le =
					(a(179),
					(function (e) {
						function t() {
							return (
								Object(c.a)(this, t),
								Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
							);
						}
						return (
							Object(p.a)(t, e),
							Object(l.a)(t, [
								{
									key: "onDeleteClick",
									value: function (e, t) {
										this.props.deleteProfileTask(e, t);
									},
								},
								{
									key: "render",
									value: function () {
										var e,
											t = this,
											a = this.props.profile_task,
											n = a.responsibility;
										n &&
											(n = n.sort(function (e, t) {
												return e.respOrder - t.respOrder;
											})),
											1 === a.priority && (e = "bg-danger text-light"),
											2 === a.priority && (e = "bg-warning text-light"),
											3 === a.priority && (e = "bg-info text-light");
										return o.a.createElement(
											"div",
											{ className: "card mb-1 bg-light" },
											o.a.createElement(
												"div",
												{ className: "card-header text-primary ".concat(e) },
												(function (e) {
													return "skill" === e.taskType
														? o.a.createElement(
																"div",
																null,
																"Years of Experience: ",
																e.skillYears
														  )
														: "educ" === e.taskType
														? o.a.createElement(
																"div",
																null,
																"Year Concluded: ",
																e.educYear
														  )
														: "lang" === e.taskType
														? o.a.createElement(
																"div",
																null,
																"Language: ",
																e.levelLanguage
														  )
														: "cliPrj" === e.taskType
														? o.a.createElement(
																"div",
																null,
																o.a.createElement(
																	"div",
																	{ className: "form-group" },
																	"Company: ",
																	e.company
																),
																o.a.createElement(
																	"div",
																	{ className: "container" },
																	o.a.createElement(
																		"div",
																		{ className: "row" },
																		o.a.createElement(
																			"div",
																			{ className: "form-group col" },
																			o.a.createElement("input", {
																				type: "date",
																				className:
																					"form-control form-control-lg",
																				name: "start_date",
																				value: e.start_date,
																				onChange: t.onChange,
																				readOnly: !0,
																			})
																		),
																		o.a.createElement(
																			"div",
																			{ className: "form-group col" },
																			o.a.createElement("input", {
																				type: "date",
																				className:
																					"form-control form-control-lg",
																				name: "end_date",
																				value: e.end_date,
																				onChange: t.onChange,
																				readOnly: !0,
																			})
																		)
																	)
																)
														  )
														: void 0;
												})(a)
											),
											o.a.createElement(
												"div",
												{ className: "card-body bg-light" },
												o.a.createElement(
													"h5",
													{ className: "card-title" },
													(function (e) {
														return "skill" === e.taskType
															? o.a.createElement(
																	"div",
																	null,
																	e.skillCompetence
															  )
															: "educ" === e.taskType
															? o.a.createElement(
																	"div",
																	null,
																	e.educOrganization
															  )
															: "lang" === e.taskType
															? o.a.createElement("div", null, e.language)
															: "cliPrj" === e.taskType
															? o.a.createElement(
																	"div",
																	null,
																	o.a.createElement(
																		"div",
																		{ className: "form-group" },
																		o.a.createElement("h6", null, "Position:"),
																		o.a.createElement("textarea", {
																			type: "text",
																			className: "form-control form-control-lg",
																			name: "position",
																			value: e.position || "",
																			readOnly: !0,
																		})
																	),
																	o.a.createElement(
																		"div",
																		{ className: "form-group" },
																		o.a.createElement(
																			"h6",
																			null,
																			"General Context:"
																		),
																		o.a.createElement("textarea", {
																			type: "text",
																			className: "form-control form-control-lg",
																			name: "generalContext",
																			onChange: t.onChange,
																			value: e.generalContext || "",
																			readOnly: !0,
																		})
																	)
															  )
															: void 0;
													})(a)
												),
												o.a.createElement(
													"div",
													{ className: "card-text text-truncate " },
													(function (e) {
														return "skill" === e.taskType
															? o.a.createElement(
																	"div",
																	null,
																	e.skillDescription
															  )
															: "educ" === e.taskType
															? o.a.createElement("div", null, e.educAwarded)
															: "lang" === e.taskType
															? o.a.createElement("div", null, e.levelLanguage)
															: "cliPrj" === e.taskType
															? o.a.createElement(
																	"div",
																	null,
																	o.a.createElement(
																		"div",
																		{ className: "form-group" },
																		o.a.createElement(
																			"h6",
																			null,
																			"Responsabilities:"
																		),
																		o.a.createElement(
																			"div",
																			null,
																			(n &&
																				n.map(function (e, a) {
																					return o.a.createElement(
																						"div",
																						{ key: a },
																						o.a.createElement(
																							"div",
																							{ className: "row" },
																							o.a.createElement(
																								"div",
																								{ className: "form-group col" },
																								o.a.createElement(
																									"div",
																									{
																										className:
																											"col-12 text-left",
																									},
																									o.a.createElement(
																										"textarea",
																										{
																											type: "text",
																											className:
																												"form-control form-control-lg",
																											name:
																												"technicalEnviroment",
																											onChange: t.onChange,
																											value:
																												e.respFunction || "",
																											readOnly: !0,
																										}
																									)
																								)
																							),
																							o.a.createElement(
																								"div",
																								{ className: "form-group col" },
																								o.a.createElement(
																									"div",
																									{
																										className:
																											"col-12 text-right",
																									},
																									o.a.createElement(
																										"textarea",
																										{
																											type: "text",
																											className:
																												"form-control form-control-lg",
																											name:
																												"technicalEnviroment",
																											onChange: t.onChange,
																											value: e.respTask || "",
																											readOnly: !0,
																										}
																									)
																								)
																							)
																						)
																					);
																				})) ||
																				"No Responsibilites Added"
																		)
																	),
																	o.a.createElement(
																		"div",
																		{ className: "form-group" },
																		o.a.createElement(
																			"h6",
																			null,
																			"Technical Enviroment:"
																		),
																		o.a.createElement("textarea", {
																			type: "text",
																			className: "form-control form-control-lg",
																			name: "technicalEnviroment",
																			onChange: t.onChange,
																			value: e.technicalEnviroment || "",
																			readOnly: !0,
																		})
																	)
															  )
															: void 0;
													})(a)
												),
												o.a.createElement(
													"div",
													{ className: "container" },
													o.a.createElement(
														"div",
														{ className: "row" },
														o.a.createElement(
															"div",
															{ className: "form-group col" },
															o.a.createElement(
																"div",
																{ className: "col-12 text-left" },
																(function (e) {
																	if ("cliPrj" === e.taskType)
																		return o.a.createElement(
																			"div",
																			null,
																			" ",
																			o.a.createElement(
																				d.b,
																				{
																					to: "/updateProfileTask/"
																						.concat(e.profileIdentifier, "/")
																						.concat(e.profileSequence, "/")
																						.concat(e.taskType),
																					className: "btn btn-primary",
																				},
																				"View / Update"
																			)
																		);
																})(a)
															)
														),
														o.a.createElement(
															"div",
															{ className: "form-group col" },
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	"button",
																	{
																		className: "btn btn-danger ml-4",
																		onClick: this.onDeleteClick.bind(
																			this,
																			a.profileIdentifier,
																			a.profileSequence
																		),
																	},
																	"Delete"
																)
															)
														)
													)
												)
											)
										);
									},
								},
							]),
							t
						);
					})(r.Component)),
				Fe = Object(h.b)(null, {
					deleteProfileTask: function (e, t) {
						return (function () {
							var a = Object(E.a)(
								v.a.mark(function a(n) {
									return v.a.wrap(function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													if (
														!window.confirm(
															"You are deleting profile task ".concat(
																t,
																", this action cannot be undone"
															)
														)
													) {
														a.next = 4;
														break;
													}
													return (
														(a.next = 3),
														b.a.delete(
															"/api/cvbacklog/".concat(e, "/").concat(t)
														)
													);
												case 3:
													n({ type: "DELETE_PROFILE_TASK", payload: t });
												case 4:
												case "end":
													return a.stop();
											}
									}, a);
								})
							);
							return function (e) {
								return a.apply(this, arguments);
							};
						})();
					},
				})(Le),
				Me = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									for (
										var e = this.props,
											t = e.profile_tasks_prop,
											a = e.task_type_prop,
											n = t.map(function (e) {
												return o.a.createElement(Fe, {
													key: e.id,
													profile_task: e,
												});
											}),
											r = [],
											s = 0;
										s < n.length;
										s++
									)
										n[s].props.profile_task.taskType === a && r.push(n[s]);
									return o.a.createElement(
										"div",
										{ className: "container" },
										o.a.createElement(
											"div",
											{ className: "row" },
											o.a.createElement(
												"div",
												{ className: "col-md-12" },
												o.a.createElement("div", {
													className: "card text-center mb-2",
												}),
												r
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Ue = a(18),
				qe = a(137),
				Ge = [
					{
						isCurrent: !0,
						summary:
							"Full-stack developer working with Angular and Java. Working for the iShares platform",
						title: "Associate Software Developer",
						startDate: { month: 11, year: 2017 },
						company: { name: "BlackRock" },
					},
					{
						isCurrent: !1,
						summary:
							"Full-stack developer working with Angular, Node and TypeScript. Working for the iShares platform. Emphasis on Dev-ops and developing the continous integration pipeline.",
						title: "Software Developer",
						endDate: { month: 11, year: 2017 },
						startDate: { month: 10, year: 2016 },
						company: { name: "Torch Markets" },
					},
					{
						isCurrent: !1,
						summary:
							"Used ASP.NET MVC 5 to produce a diversity data collection tool for the future of British television.\n\nUsed AngularJS and C# best practices. Technologies used include JavaScript, ASP.NET MVC 5, SQL, Oracle, SASS, Bootstrap, Grunt.",
						title: "Software Developer",
						endDate: { month: 10, year: 2016 },
						startDate: { month: 3, year: 2015 },
						company: { name: "Soundmouse" },
					},
					{
						isCurrent: !1,
						summary:
							"Develop web commerce platforms for constious high profile clients.\n\nCreated a log analysis web application with the Play Framework in Java, incorporating Test Driven Development. It asynchronously uploads and processes large (2 GB) log files, and outputs meaningful results in context with the problem. \n\nAnalysis  and  development  of  the payment system infrastructure and user accounts section to be used by several clients of the company such as Waitrose, Tally Weijl, DJ Sports, Debenhams, Ann Summers, John Lewis and others.\n\nTechnologies used include WebSphere Commerce, Java, JavaScript and JSP.",
						title: "Java Developer",
						endDate: { month: 10, year: 2014 },
						startDate: { month: 3, year: 2013 },
						company: { name: "Soundmouse" },
					},
				],
				We = [
					{
						degree: "Master of Science (MSc)",
						fieldOfStudy: "Computer Science",
						notes:
							"Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithmics, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.",
						schoolName: "University College London",
						startDate: { year: 2012 },
						endDate: { year: 2013 },
					},
					{
						degree: "Bachelor of Engineering (BEng)",
						fieldOfStudy: "Material Science and Engineering",
						notes:
							"Exam Results: 2:1, Dissertation: 1st Class with Distinction\n\nRelevant courses: C Programming, Mathematics and Business for Engineers.",
						schoolName: "Imperial College London",
						startDate: { year: 2009 },
						endDate: { year: 2012 },
					},
				],
				Ye = [
					{ name: "Angular" },
					{ name: "TypeScript" },
					{ name: "JavaScript" },
					{ name: "NodeJS" },
				],
				ze = [{ issuer: "Oracle", name: "Oracle Certified Expert" }],
				He = (function () {
					function e() {
						Object(c.a)(this, e);
					}
					return (
						Object(l.a)(e, [
							{
								key: "create",
								value: function (e) {
									var t = this,
										a = e[0],
										n = e[1],
										r = e[2],
										o = e[3],
										s = new Ue.Document();
									s.addParagraph(new Ue.Paragraph("Dolan Miu").title()),
										s.addParagraph(
											this.createContactInfo(
												"07534563401",
												"https://www.linkedin.com/in/dolan1",
												"docx@com"
											)
										),
										s.addParagraph(this.createHeading("Education"));
									var i = !0,
										c = !1,
										l = void 0;
									try {
										for (
											var m, u = n[Symbol.iterator]();
											!(i = (m = u.next()).done);
											i = !0
										) {
											var p = m.value;
											s.addParagraph(
												this.createInstitutionHeader(
													p.schoolName,
													""
														.concat(p.startDate.year, " - ")
														.concat(p.endDate.year)
												)
											),
												s.addParagraph(
													this.createRoleText(
														"".concat(p.fieldOfStudy, " - ").concat(p.degree)
													)
												),
												this.splitParagraphIntoBullets(p.notes).forEach(
													function (e) {
														s.addParagraph(t.createBullet(e));
													}
												);
										}
									} catch (C) {
										(c = !0), (l = C);
									} finally {
										try {
											i || null == u.return || u.return();
										} finally {
											if (c) throw l;
										}
									}
									s.addParagraph(this.createHeading("Experience"));
									var d = !0,
										h = !1,
										f = void 0;
									try {
										for (
											var v, E = a[Symbol.iterator]();
											!(d = (v = E.next()).done);
											d = !0
										) {
											var g = v.value;
											s.addParagraph(
												this.createInstitutionHeader(
													g.company.name,
													this.createPositionDateText(
														g.startDate,
														g.endDate,
														g.isCurrent
													)
												)
											),
												s.addParagraph(this.createRoleText(g.title)),
												this.splitParagraphIntoBullets(g.summary).forEach(
													function (e) {
														s.addParagraph(t.createBullet(e));
													}
												);
										}
									} catch (C) {
										(h = !0), (f = C);
									} finally {
										try {
											d || null == E.return || E.return();
										} finally {
											if (h) throw f;
										}
									}
									s.addParagraph(
										this.createHeading("Skills, Achievements and Interests")
									),
										s.addParagraph(this.createSubHeading("Skills")),
										s.addParagraph(this.createSkillList(r)),
										s.addParagraph(this.createSubHeading("Achievements"));
									var b = !0,
										y = !1,
										k = void 0;
									try {
										for (
											var N,
												j = this.createAchivementsList(o)[Symbol.iterator]();
											!(b = (N = j.next()).done);
											b = !0
										) {
											var O = N.value;
											s.addParagraph(O);
										}
									} catch (C) {
										(y = !0), (k = C);
									} finally {
										try {
											b || null == j.return || j.return();
										} finally {
											if (y) throw k;
										}
									}
									return (
										s.addParagraph(this.createSubHeading("Interests")),
										s.addParagraph(
											this.createInterests(
												"Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing."
											)
										),
										s.addParagraph(this.createHeading("References")),
										s.addParagraph(
											new Ue.Paragraph(
												"Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk"
											)
										),
										s.addParagraph(
											new Ue.Paragraph("More references upon request")
										),
										s.addParagraph(
											new Ue.Paragraph(
												"This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio."
											).center()
										),
										s
									);
								},
							},
							{
								key: "createContactInfo",
								value: function (e, t, a) {
									var n = new Ue.Paragraph().center(),
										r = new Ue.TextRun(
											"Mobile: "
												.concat(e, " | LinkedIn: ")
												.concat(t, " | Email: ")
												.concat(a)
										),
										o = new Ue.TextRun(
											"Address: 58 Elm Avenue, Kent ME4 6ER, UK"
										).break();
									return n.addRun(r), n.addRun(o), n;
								},
							},
							{
								key: "createHeading",
								value: function (e) {
									return new Ue.Paragraph(e).heading1().thematicBreak();
								},
							},
							{
								key: "createSubHeading",
								value: function (e) {
									return new Ue.Paragraph(e).heading2();
								},
							},
							{
								key: "createInstitutionHeader",
								value: function (e, t) {
									var a = new Ue.Paragraph().maxRightTabStop(),
										n = new Ue.TextRun(e).bold(),
										r = new Ue.TextRun(t).tab().bold();
									return a.addRun(n), a.addRun(r), a;
								},
							},
							{
								key: "createRoleText",
								value: function (e) {
									var t = new Ue.Paragraph(),
										a = new Ue.TextRun(e).bold();
									return t.addRun(a), t;
								},
							},
							{
								key: "createBullet",
								value: function (e) {
									return new Ue.Paragraph(e).bullet();
								},
							},
							{
								key: "createSkillList",
								value: function (e) {
									var t = new Ue.Paragraph(),
										a =
											e
												.map(function (e) {
													return e.name;
												})
												.join(", ") + ".";
									return t.addRun(new Ue.TextRun(a)), t;
								},
							},
							{
								key: "createAchivementsList",
								value: function (e) {
									var t = [],
										a = !0,
										n = !1,
										r = void 0;
									try {
										for (
											var o, s = e[Symbol.iterator]();
											!(a = (o = s.next()).done);
											a = !0
										) {
											var i = o.value;
											t.push(new Ue.Paragraph(i.name).bullet());
										}
									} catch (c) {
										(n = !0), (r = c);
									} finally {
										try {
											a || null == s.return || s.return();
										} finally {
											if (n) throw r;
										}
									}
									return t;
								},
							},
							{
								key: "createInterests",
								value: function (e) {
									var t = new Ue.Paragraph();
									return t.addRun(new Ue.TextRun(e)), t;
								},
							},
							{
								key: "splitParagraphIntoBullets",
								value: function (e) {
									return e.split("\n\n");
								},
							},
							{
								key: "createPositionDateText",
								value: function (e, t, a) {
									var n = this.getMonthFromInt(e.month) + ". " + e.year,
										r = a
											? "Present"
											: ""
													.concat(this.getMonthFromInt(t.month), ". ")
													.concat(t.year);
									return "".concat(n, " - ").concat(r);
								},
							},
							{
								key: "getMonthFromInt",
								value: function (e) {
									switch (e) {
										case 1:
											return "Jan";
										case 2:
											return "Feb";
										case 3:
											return "Mar";
										case 4:
											return "Apr";
										case 5:
											return "May";
										case 6:
											return "Jun";
										case 7:
											return "Jul";
										case 8:
											return "Aug";
										case 9:
											return "Sept";
										case 10:
											return "Oct";
										case 11:
											return "Nov";
										case 12:
											return "Dec";
										default:
											return null;
									}
								},
							},
						]),
						e
					);
				})(),
				Je = function (e) {
					return new He().create([Ge, We, Ye, ze]);
				},
				Ke = (function (e) {
					function t(e) {
						var a;
						return (
							Object(c.a)(this, t),
							((a = Object(m.a)(this, Object(u.a)(t).call(this, e))).state = {
								id: "",
								fullName: "",
								candidateEmail: "",
								profileIdentifier: "",
								token: "",
								summary: "",
								typeProfile: "",
								otherProfile: "",
								technologyArea: "",
								domains: "",
								certifications: "",
								tools: "",
								trainings: "",
								methodologies: "",
								others: "",
								faseProfile: "",
								errors: {},
							}),
							(a.onChange = a.onChange.bind(Object(L.a)(a))),
							(a.onSubmit = a.onSubmit.bind(Object(L.a)(a))),
							(a.handleEnter = a.handleEnter.bind(Object(L.a)(a))),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "onGenerateCv",
								value: function (e) {
									var t = this,
										a = Je(this.props.profile);
									new Ue.Packer().toBlob(a).then(function (e) {
										console.log(e),
											Object(qe.saveAs)(
												e,
												"Dossie-".concat(t.state.fullName, ".docx")
											),
											console.log("Document created successfully");
									});
								},
							},
							{
								key: "handleEnter",
								value: function (e) {
									if (13 === e.keyCode) {
										var t = e.target.form,
											a = Array.prototype.indexOf.call(t, e.target);
										t.elements[a + 1].focus(), e.preventDefault();
									}
								},
							},
							{
								key: "componentDidMount",
								value: function () {
									var e = this.props.match.params.id;
									this.props.security.validToken
										? (this.props.getProfileByLink(e, this.props.history),
										  this.props.getProfileBacklog(e, this.props.history))
										: this.props.history.push("/");
								},
							},
							{
								key: "componentWillReceiveProps",
								value: function (e, t) {
									if (
										(e.errors &&
											e.errors !== this.state.errors &&
											this.setState({ errors: e.errors }),
										e.profile && e.profile !== this.state.profile)
									) {
										var a = e.profile,
											n = a.id,
											r = a.fullName,
											o = a.candidateEmail,
											s = a.profileIdentifier,
											i = a.token,
											c = a.summary,
											l = a.typeProfile,
											m = a.otherProfile,
											u = a.technologyArea,
											p = a.domains,
											d = a.certifications,
											h = a.tools,
											f = a.trainings,
											v = a.methodologies,
											E = a.others,
											g = a.faseProfile;
										this.setState({
											id: n,
											fullName: r,
											candidateEmail: o,
											profileIdentifier: s,
											token: i,
											summary: c,
											typeProfile: l,
											otherProfile: m,
											technologyArea: u,
											domains: p,
											certifications: d,
											tools: h,
											trainings: f,
											methodologies: v,
											others: E,
											faseProfile: g,
										});
									}
								},
							},
							{
								key: "onChange",
								value: function (e) {
									e.preventDefault(),
										this.setState(
											Object(B.a)({}, e.target.name, e.target.value)
										);
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault(), this.updateProfile();
								},
							},
							{
								key: "updateProfile",
								value: function () {
									var e = {
										id: this.state.id,
										fullName: this.state.fullName,
										candidateEmail: this.state.candidateEmail,
										profileIdentifier: this.state.profileIdentifier,
										summary: this.state.summary,
										typeProfile: this.state.typeProfile,
										otherProfile: this.state.otherProfile,
										technologyArea: this.state.technologyArea,
										domains: this.state.domains,
										certifications: this.state.certifications,
										tools: this.state.tools,
										trainings: this.state.trainings,
										methodologies: this.state.methodologies,
										others: this.state.others,
										faseProfile: this.state.faseProfile,
									};
									this.props.updateCV(e, this.props.history);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this,
										t = this.state.errors,
										a = this.props.match.params.id,
										n = this.props.profileBacklog.profile_tasks,
										r = function (t, n, r) {
											return n.length < 1
												? t.profileNotFound
													? o.a.createElement(
															"div",
															{
																className: "alert alert-danger text-center",
																role: "alert",
															},
															t.profileNotFound
													  )
													: t.profileIdentifier
													? o.a.createElement(
															"div",
															{
																className: "alert alert-danger text-center",
																role: "alert",
															},
															t.profileIdentifier
													  )
													: o.a.createElement(
															d.b,
															{
																to: "/addProfileTask/".concat(a, "/").concat(r),
																className: "btn alert-info btn-block mt-4",
																role: "alert",
																style:
																	"Select" !== e.state.typeProfile &&
																	1 === e.state.faseProfile
																		? null
																		: { pointerEvents: "none" },
															},
															"No ",
															(function (e) {
																return "skill" === e
																	? "Competences"
																	: "educ" === e
																	? "Educations"
																	: "lang" === e
																	? "Languages"
																	: "cliPrj" === e
																	? "Client/Projects"
																	: void 0;
															})(r),
															" Added"
													  )
												: o.a.createElement(Me, {
														profile_tasks_prop: n,
														task_type_prop: r,
												  });
										};
									return o.a.createElement(
										"div",
										{ className: "profile" },
										o.a.createElement(
											"div",
											{ className: "form-group col" },
											o.a.createElement(
												"div",
												{ className: "col-12 text-right" },
												o.a.createElement(
													"button",
													{
														style: {
															position: "fixed",
															bottom: "0",
															right: "0",
															width: "200px",
															zIndex: "9999",
														},
														className: "btn btn-danger ml-4",
														onClick: this.onGenerateCv.bind(this, "obabba"),
													},
													"Generate Cv"
												)
											)
										),
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "form-group col" },
													o.a.createElement(
														"div",
														{ className: "col-md-8 m-auto" },
														this.props.security.admin &&
															o.a.createElement(O, {
																link: "/profiles",
																caption: "Back to Profiles",
																cssClass: "btn btn-light",
															}),
														o.a.createElement(
															"div",
															{ className: "display-4 text-center" },
															"Edit CV form"
														),
														o.a.createElement("hr", null),
														this.props.security.admin &&
															o.a.createElement(
																"div",
																null,
																o.a.createElement(
																	"div",
																	{ className: "text-center" },
																	"Session expire in 2 days"
																),
																o.a.createElement("hr", null)
															),
														o.a.createElement(
															"form",
															{ onSubmit: this.onSubmit },
															o.a.createElement(
																"div",
																{
																	role: "grid",
																	onBlur: this._onBlur,
																	onFocus: this._onFocus,
																},
																this.props.children
															),
															o.a.createElement("h6", null, "Full name :"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("input", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg ",
																		{ "is-invalid": t.fullName }
																	),
																	placeholder: "Full Name",
																	name: "fullName",
																	onChange: this.onChange,
																	value: this.state.fullName || "",
																	autoFocus: !0,
																	onKeyDown: this.handleEnter,
																}),
																t.fullName &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.fullName
																	)
															),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("h6", null, "Profile Area :"),
																o.a.createElement(
																	"select",
																	{
																		className: M()(
																			"form-control form-control-lg",
																			{ "is-invalid": t.typeProfile }
																		),
																		name: "typeProfile",
																		value: this.state.typeProfile,
																		onChange: this.onChange,
																		ref: "fullName",
																	},
																	o.a.createElement(
																		"option",
																		{ value: "" },
																		"Select"
																	),
																	o.a.createElement(
																		"option",
																		{ value: "Software" },
																		"Software"
																	),
																	o.a.createElement(
																		"option",
																		{ value: "Engineer" },
																		"Engineer"
																	),
																	o.a.createElement(
																		"option",
																		{ value: "Lead Team" },
																		"Lead Team"
																	),
																	o.a.createElement(
																		"option",
																		{ value: "Other" },
																		"Other"
																	)
																),
																t.typeProfile &&
																	o.a.createElement(
																		"div",
																		{
																			style: {
																				width: "100%",
																				marginTop: ".25rem",
																				fontSize: "80%",
																				color: "#dc3545",
																			},
																		},
																		t.typeProfile
																	)
															),
															"Other" === this.state.typeProfile &&
																o.a.createElement(
																	"div",
																	null,
																	o.a.createElement("h6", null, "Other :"),
																	o.a.createElement(
																		"div",
																		{ className: "form-group" },
																		o.a.createElement("input", {
																			type: "text",
																			className: M()(
																				"form-control form-control-lg ",
																				{ "is-invalid": t.otherProfile }
																			),
																			placeholder: "Please specify",
																			name: "otherProfile",
																			onChange: this.onChange,
																			value: this.state.otherProfile,
																			autoFocus: !0,
																		}),
																		t.otherProfile &&
																			o.a.createElement(
																				"div",
																				{ className: "invalid-feedback" },
																				t.otherProfile
																			)
																	),
																	o.a.createElement("hr", null)
																),
															o.a.createElement("h6", null, "Technoly Area :"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("input", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg ",
																		{ "is-invalid": t.technologyArea }
																	),
																	placeholder: "Technology Area",
																	name: "technologyArea",
																	onChange: this.onChange,
																	value: this.state.technologyArea || "",
																}),
																t.technologyArea &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.technologyArea
																	)
															),
															o.a.createElement("h6", null, "Experiences:"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.summary }
																	),
																	placeholder: "Summary of profile",
																	name: "summary",
																	value: this.state.summary,
																	onChange: this.onChange,
																	ref: "fullName",
																	style: {
																		marginTop: "0px",
																		marginBottom: "0px",
																		height: "251px",
																	},
																}),
																t.summary &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.summary
																	)
															),
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/editcv/".concat(a),
																		onClick: this.updateProfile.bind(this),
																		className: "",
																		style: this.state.summary
																			? null
																			: { pointerEvents: "none" },
																	},
																	o.a.createElement(
																		"i",
																		{
																			className: "fas fa-plus-circle",
																			style: this.state.summary
																				? null
																				: { color: "#dddddd" },
																		},
																		" ",
																		"Save"
																	)
																)
															),
															o.a.createElement("hr", null),
															o.a.createElement(
																"h6",
																null,
																"Years of Experiences:"
															),
															o.a.createElement(
																"div",
																{ className: "card" },
																o.a.createElement(
																	"div",
																	{ className: "card-body" },
																	o.a.createElement(
																		"div",
																		{ className: "col-12 text-right" },
																		o.a.createElement(
																			d.b,
																			{
																				to: "/addProfileTask/".concat(
																					a,
																					"/",
																					"skill"
																				),
																				className: "",
																				style:
																					"Select" !== this.state.typeProfile &&
																					1 === this.state.faseProfile
																						? null
																						: { pointerEvents: "none" },
																			},
																			o.a.createElement(
																				"i",
																				{
																					className: "fas fa-plus-circle",
																					style:
																						"Select" !==
																							this.state.typeProfile &&
																						1 === this.state.faseProfile
																							? null
																							: { color: "#dddddd" },
																				},
																				" ",
																				"Add Competences"
																			)
																		)
																	),
																	r(
																		t,
																		n.filter(function (e) {
																			return "skill" === e.taskType;
																		}),
																		"skill"
																	)
																)
															),
															o.a.createElement("hr", null),
															o.a.createElement("h6", null, "Domains:"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.domains }
																	),
																	placeholder: "Domains",
																	name: "domains",
																	value: this.state.domains || "",
																	onChange: this.onChange,
																	style: {
																		marginTop: "0px",
																		marginBottom: "0px",
																		height: "251px",
																	},
																}),
																t.domains &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.domains
																	)
															),
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/editcv/".concat(a),
																		onClick: this.updateProfile.bind(this),
																		className: "",
																		style: this.state.domains
																			? null
																			: { pointerEvents: "none" },
																	},
																	o.a.createElement(
																		"i",
																		{
																			className: "fas fa-plus-circle",
																			style: this.state.domains
																				? null
																				: { color: "#dddddd" },
																		},
																		" ",
																		"Save"
																	)
																)
															),
															o.a.createElement("h6", null, "Certifications:"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.certifications }
																	),
																	placeholder: "Certifications",
																	name: "certifications",
																	value: this.state.certifications || "",
																	onChange: this.onChange,
																	style: {
																		marginTop: "0px",
																		marginBottom: "0px",
																		height: "251px",
																	},
																}),
																t.certifications &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.certifications
																	)
															),
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/editcv/".concat(a),
																		onClick: this.updateProfile.bind(this),
																		className: "",
																		style: this.state.certifications
																			? null
																			: { pointerEvents: "none" },
																	},
																	o.a.createElement(
																		"i",
																		{
																			className: "fas fa-plus-circle",
																			style: this.state.certifications
																				? null
																				: { color: "#dddddd" },
																		},
																		" ",
																		"Save"
																	)
																)
															),
															o.a.createElement("h6", null, "Tools:"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.tools }
																	),
																	placeholder: "Tools",
																	name: "tools",
																	value: this.state.tools || "",
																	onChange: this.onChange,
																	style: {
																		marginTop: "0px",
																		marginBottom: "0px",
																		height: "251px",
																	},
																}),
																t.tools &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.tools
																	)
															),
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/editcv/".concat(a),
																		onClick: this.updateProfile.bind(this),
																		className: "",
																		style: this.state.tools
																			? null
																			: { pointerEvents: "none" },
																	},
																	o.a.createElement(
																		"i",
																		{
																			className: "fas fa-plus-circle",
																			style: this.state.tools
																				? null
																				: { color: "#dddddd" },
																		},
																		" ",
																		"Save"
																	)
																)
															),
															o.a.createElement("h6", null, "Trainings:"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.trainings }
																	),
																	placeholder: "Trainings",
																	name: "trainings",
																	value: this.state.trainings || "",
																	onChange: this.onChange,
																	style: {
																		marginTop: "0px",
																		marginBottom: "0px",
																		height: "251px",
																	},
																}),
																t.trainings &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.trainings
																	)
															),
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/editcv/".concat(a),
																		onClick: this.updateProfile.bind(this),
																		className: "",
																		style: this.state.trainings
																			? null
																			: { pointerEvents: "none" },
																	},
																	o.a.createElement(
																		"i",
																		{
																			className: "fas fa-plus-circle",
																			style: this.state.trainings
																				? null
																				: { color: "#dddddd" },
																		},
																		" ",
																		"Save"
																	)
																)
															),
															o.a.createElement("h6", null, "Methodologies:"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.methodologies }
																	),
																	placeholder: "Methodologies",
																	name: "methodologies",
																	value: this.state.methodologies || "",
																	onChange: this.onChange,
																	style: {
																		marginTop: "0px",
																		marginBottom: "0px",
																		height: "251px",
																	},
																}),
																t.methodologies &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.methodologies
																	)
															),
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/editcv/".concat(a),
																		onClick: this.updateProfile.bind(this),
																		className: "",
																		style: this.state.methodologies
																			? null
																			: { pointerEvents: "none" },
																	},
																	o.a.createElement(
																		"i",
																		{
																			className: "fas fa-plus-circle",
																			style: this.state.methodologies
																				? null
																				: { color: "#dddddd" },
																		},
																		" ",
																		"Save"
																	)
																)
															),
															o.a.createElement("h6", null, "Others:"),
															o.a.createElement(
																"div",
																{ className: "form-group" },
																o.a.createElement("textarea", {
																	type: "text",
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.others }
																	),
																	placeholder: "Others",
																	name: "others",
																	value: this.state.others || "",
																	onChange: this.onChange,
																	style: {
																		marginTop: "0px",
																		marginBottom: "0px",
																		height: "251px",
																	},
																}),
																t.others &&
																	o.a.createElement(
																		"div",
																		{ className: "invalid-feedback" },
																		t.others
																	)
															),
															o.a.createElement(
																"div",
																{ className: "col-12 text-right" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/editcv/".concat(a),
																		onClick: this.updateProfile.bind(this),
																		className: "",
																		style: this.state.others
																			? null
																			: { pointerEvents: "none" },
																	},
																	o.a.createElement(
																		"i",
																		{
																			className: "fas fa-plus-circle",
																			style: this.state.others
																				? null
																				: { color: "#dddddd" },
																		},
																		" ",
																		"Save"
																	)
																)
															),
															o.a.createElement("hr", null),
															o.a.createElement(
																"h6",
																null,
																"Education - Languages:"
															),
															o.a.createElement(
																"div",
																{ className: "card" },
																o.a.createElement(
																	"div",
																	{ className: "card-body" },
																	o.a.createElement(
																		"div",
																		{ className: "col-12 text-right" },
																		o.a.createElement(
																			d.b,
																			{
																				to: "/addProfileTask/".concat(
																					a,
																					"/",
																					"educ"
																				),
																				className: "",
																				style:
																					"Select" !== this.state.typeProfile &&
																					1 === this.state.faseProfile
																						? null
																						: { pointerEvents: "none" },
																			},
																			o.a.createElement(
																				"i",
																				{
																					className: "fas fa-plus-circle",
																					style:
																						"Select" !==
																							this.state.typeProfile &&
																						1 === this.state.faseProfile
																							? null
																							: { color: "#dddddd" },
																				},
																				" ",
																				"Add Educations"
																			)
																		)
																	),
																	r(
																		t,
																		n.filter(function (e) {
																			return "educ" === e.taskType;
																		}),
																		"educ"
																	)
																),
																o.a.createElement(
																	"div",
																	{ className: "card-body" },
																	o.a.createElement(
																		"div",
																		{ className: "col-12 text-right" },
																		o.a.createElement(
																			d.b,
																			{
																				to: "/addProfileTask/".concat(
																					a,
																					"/",
																					"lang"
																				),
																				className: "",
																				style:
																					"Select" !== this.state.typeProfile &&
																					1 === this.state.faseProfile
																						? null
																						: { pointerEvents: "none" },
																			},
																			o.a.createElement(
																				"i",
																				{
																					className: "fas fa-plus-circle",
																					style:
																						"Select" !==
																							this.state.typeProfile &&
																						1 === this.state.faseProfile
																							? null
																							: { color: "#dddddd" },
																				},
																				" ",
																				"Add Languages"
																			)
																		)
																	),
																	r(
																		t,
																		n.filter(function (e) {
																			return "lang" === e.taskType;
																		}),
																		"lang"
																	)
																)
															),
															o.a.createElement("hr", null),
															o.a.createElement("h6", null, "Projects:"),
															o.a.createElement(
																"div",
																{ className: "card" },
																o.a.createElement(
																	"div",
																	{ className: "card-body" },
																	o.a.createElement(
																		"div",
																		{ className: "col-12 text-right" },
																		o.a.createElement(
																			d.b,
																			{
																				to: "/addProfileTask/".concat(
																					a,
																					"/",
																					"cliPrj"
																				),
																				className: "",
																				style:
																					"Select" !== this.state.typeProfile &&
																					1 === this.state.faseProfile
																						? null
																						: { pointerEvents: "none" },
																			},
																			o.a.createElement(
																				"i",
																				{
																					className: "fas fa-plus-circle",
																					style:
																						"Select" !==
																							this.state.typeProfile &&
																						1 === this.state.faseProfile
																							? null
																							: { color: "#dddddd" },
																				},
																				" ",
																				"Add Client/Projects"
																			)
																		)
																	),
																	r(
																		t,
																		n.filter(function (e) {
																			return "cliPrj" === e.taskType;
																		}),
																		"cliPrj"
																	)
																)
															),
															o.a.createElement("hr", null),
															t.technologyArea &&
																o.a.createElement(
																	"div",
																	{
																		style: {
																			width: "100%",
																			marginTop: ".25rem",
																			fontSize: "80%",
																			color: "#dc3545",
																		},
																	},
																	"Please Check the fields above:"
																),
															o.a.createElement("input", {
																onClick: this._handleButtonClick,
																type: "submit",
																value: "Save",
																className: "btn btn-primary btn-block mt-4",
															})
														)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Ve = Object(h.b)(
					function (e) {
						return {
							profile: e.profile.profile,
							profileBacklog: e.profileBacklog,
							errors: e.errors,
							getProfileByLink: e.getProfileByLink,
							getProfileBacklog: e.getProfileBacklog,
						};
					},
					{
						getProfileByLink: function (e, t) {
							return (function () {
								var a = Object(E.a)(
									v.a.mark(function a(n) {
										var r, o, s, i;
										return v.a.wrap(
											function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(a.prev = 0),
																(a.next = 3),
																b.a.get("/api/editcv/".concat(e))
															);
														case 3:
															(r = a.sent),
																n({ type: "GET_PROFILE", payload: r.data }),
																(o = r.data.token),
																"undefined" === typeof localStorage.jwtToken &&
																	"undefined" !== typeof o &&
																	(localStorage.jwtTokenCandidate ||
																		(T(o),
																		localStorage.setItem(
																			"jwtTokenCandidate",
																			o
																		)),
																	(s = P()(o)),
																	console.log(
																		"Expire Remaining:",
																		s.exp - Date.now() / 1e3
																	),
																	(i = Date.now() / 1e3),
																	s.exp < i && (window.location.href = "/")),
																n({ type: y, payload: {} }),
																(a.next = 15);
															break;
														case 11:
															(a.prev = 11),
																(a.t0 = a.catch(0)),
																t.push("/infoPage/".concat(e)),
																"undefined" === typeof a.t0.response
																	? n({ type: y, payload: a.t0 })
																	: n({ type: y, payload: a.t0.response.data });
														case 15:
														case "end":
															return a.stop();
													}
											},
											a,
											null,
											[[0, 11]]
										);
									})
								);
								return function (e) {
									return a.apply(this, arguments);
								};
							})();
						},
						updateCV: function (e, t) {
							return (function () {
								var a = Object(E.a)(
									v.a.mark(function a(n) {
										var r, o;
										return v.a.wrap(
											function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(a.prev = 0),
																(a.next = 3),
																b.a.post("/api/editcv", e)
															);
														case 3:
															(r = a.sent),
																n({ type: "GET_PROFILE", payload: r.data }),
																n({ type: y, payload: {} }),
																(a.next = 14);
															break;
														case 8:
															(a.prev = 8),
																(a.t0 = a.catch(0)),
																(o = a.t0.profileNotfound),
																console.log(o),
																(a.t0.response.data.tokenMessage ||
																	a.t0.response.data.profileNotfound) &&
																	t.push(
																		"/infoPage/".concat(e.profileIdentifier)
																	);
															try {
																n({ type: y, payload: a.t0.response.data });
															} catch (s) {
																console.log(a.t0);
															}
														case 14:
														case "end":
															return a.stop();
													}
											},
											a,
											null,
											[[0, 8]]
										);
									})
								);
								return function (e) {
									return a.apply(this, arguments);
								};
							})();
						},
						getProfileBacklog: function (e, t) {
							return (function () {
								var t = Object(E.a)(
									v.a.mark(function t(a) {
										var n;
										return v.a.wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.prev = 0),
																(t.next = 3),
																b.a.get("/api/cvbacklog/".concat(e))
															);
														case 3:
															(n = t.sent),
																a({
																	type: "GET_PROFILE_BACKLOG",
																	payload: n.data,
																}),
																a({ type: y, payload: {} }),
																(t.next = 11);
															break;
														case 8:
															(t.prev = 8),
																(t.t0 = t.catch(0)),
																t.t0.response && t.t0.response.data
																	? a({ type: y, payload: t.t0.response.data })
																	: (console.log(t.t0),
																	  a({ type: y, payload: t.t0 }));
														case 11:
														case "end":
															return t.stop();
													}
											},
											t,
											null,
											[[0, 8]]
										);
									})
								);
								return function (e) {
									return t.apply(this, arguments);
								};
							})();
						},
					}
				)(U(Ke)),
				Xe = a(64),
				Qe = a.n(Xe),
				$e = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								title: "",
								profileSequence: "",
								profileIdentifier: "",
								educYear: "",
								educAwarded: "",
								educOrganization: "",
								create_At: "",
								profile: {},
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onChangeText = e.onChangeText.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									console.log(this.state), console.log(this.props);
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onChangeText",
								value: function (e) {
									e &&
										(/^[0-9]+$/.test(e.toString())
											? this.setState({ educYear: e.toString() })
											: this.setState({ educYear: "" }));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									if ((e.preventDefault(), "Add" === this.props.typeForm)) {
										var t = Object(H.a)({}, this.props, {
											profile: Object(H.a)({}, this.props.profile, {
												educYear: this.state.educYear,
												educAwarded: this.state.educAwarded,
												educOrganization: this.state.educOrganization,
												taskType: this.props.taskType,
											}),
										});
										this.props.addProfileTask(
											this.props.profileIdentifier,
											t.profile,
											this.props.history
										);
									} else {
										var a = {
											id: this.state.id,
											educYear: this.state.educYear,
											educAwarded: this.state.educAwarded,
											educOrganization: this.state.educOrganization,
										};
										this.props.updateProfileTask(
											this.state.profileIdentifier,
											this.state.profileSequence,
											a,
											this.props.history
										);
									}
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props,
										t = e.errors,
										a = e.typeForm;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/editcv/".concat(
																this.props.profileIdentifier
															),
															className: "btn btn-light",
														},
														"Back to Edit CV"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														a,
														" Education"
													),
													o.a.createElement(
														"div",
														{ className: "lead text-center" },
														o.a.createElement("hr", null),
														this.props.profile.profileSequence &&
															o.a.createElement(
																"span",
																null,
																"Education ID: ",
																this.props.profile.profileSequence,
																" "
															),
														t.profileNotFound &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																"Please Check the fields above:",
																o.a.createElement("hr", null),
																t.profileNotFound
															)
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement("h6", null, "Organization:"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": t.educOrganization,
																}),
																name: "educOrganization",
																placeholder: "Organization",
																value: this.state.educOrganization,
																onChange: this.onChange,
															}),
															t.educOrganization &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	t.educOrganization
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"h6",
																null,
																"Qualification Awarded :"
															),
															o.a.createElement(
																"select",
																{
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.educAwarded }
																	),
																	name: "educAwarded",
																	value: this.state.educAwarded,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: "" },
																	"Awarded"
																),
																o.a.createElement(
																	"option",
																	{ value: "Diplom" },
																	"Diplom"
																),
																o.a.createElement(
																	"option",
																	{ value: "Bsc" },
																	"Bsc"
																),
																o.a.createElement(
																	"option",
																	{ value: "Msc" },
																	"Msc"
																),
																o.a.createElement(
																	"option",
																	{ value: "Mag" },
																	"Mag"
																),
																o.a.createElement(
																	"option",
																	{ value: "Dipl.Ing" },
																	"Dipl.Ing"
																),
																o.a.createElement(
																	"option",
																	{ value: "Phd" },
																	"Phd"
																),
																o.a.createElement(
																	"option",
																	{ value: "Dr" },
																	"Dr"
																)
															),
															t.educAwarded &&
																o.a.createElement(
																	"div",
																	{
																		style: {
																			width: "100%",
																			marginTop: ".25rem",
																			fontSize: "80%",
																			color: "#dc3545",
																		},
																	},
																	t.educAwarded
																)
														),
														o.a.createElement("h6", null, "Year Concluded:"),
														o.a.createElement(Qe.a, {
															mobile: !0,
															min: 1900,
															max: new Date().getFullYear(),
															className: "form-control",
															name: "educYear",
															onChange: this.onChangeText,
															value: this.state.educYear,
														}),
														t.educYear &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																t.educYear
															),
														o.a.createElement("input", {
															type: "submit",
															value: "Save",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Ze = Object(h.b)(
					function (e) {
						return {
							title: e.title,
							profile: e.profile.profile,
							errors: e.errors,
						};
					},
					{ addProfileTask: Re, updateProfileTask: Be }
				)($e),
				et = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								title: "",
								profileSequence: "",
								profileIdentifier: "",
								skillYears: "",
								skillCompetence: "",
								create_At: "",
								profile: {},
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onChangeText = e.onChangeText.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onChangeText",
								value: function (e) {
									e &&
										(/^[0-9]+$/.test(e.toString())
											? this.setState({ skillYears: e.toString() })
											: this.setState({ skillYears: "" }));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									if ((e.preventDefault(), "Add" === this.props.typeForm)) {
										var t = Object(H.a)({}, this.props, {
											profile: Object(H.a)({}, this.props.profile, {
												skillYears: this.state.skillYears,
												skillCompetence: this.state.skillCompetence,
												taskType: this.props.taskType,
											}),
										});
										this.props.addProfileTask(
											this.props.profileIdentifier,
											t.profile,
											this.props.history
										);
									} else {
										var a = {
											id: this.state.id,
											skillYears: this.state.skillYears,
											skillCompetence: this.state.skillCompetence,
										};
										this.props.updateProfileTask(
											this.state.profileIdentifier,
											this.state.profileSequence,
											a,
											this.props.history
										);
									}
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props,
										t = e.errors,
										a = e.typeForm;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/editcv/".concat(
																this.props.profileIdentifier
															),
															className: "btn btn-light",
														},
														"Back to Edit CV"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														a,
														" Competences"
													),
													o.a.createElement(
														"div",
														{ className: "lead text-center" },
														o.a.createElement("hr", null),
														this.props.profile.profileSequence &&
															o.a.createElement(
																"span",
																null,
																"Competence ID: ",
																this.props.profile.profileSequence,
																" "
															),
														t.profileNotFound &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																"Please Check the fields above:",
																o.a.createElement("hr", null),
																t.profileNotFound
															)
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("h6", null, "Compentence:"),
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": t.skillCompetence,
																}),
																name: "skillCompetence",
																placeholder: "Competences",
																value: this.state.skillCompetence,
																onChange: this.onChange,
															}),
															t.skillCompetence &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	t.skillCompetence
																)
														),
														o.a.createElement("h6", null, "Years:"),
														o.a.createElement(Qe.a, {
															mobile: !0,
															min: 1,
															max: 50,
															className: "form-control",
															name: "skillYears",
															onChange: this.onChangeText,
															value: this.state.skillYears,
														}),
														t.skillYears &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																t.skillYears
															),
														o.a.createElement("input", {
															type: "submit",
															value: "Save",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				tt = Object(h.b)(
					function (e) {
						return {
							title: e.title,
							profile: e.profile.profile,
							errors: e.errors,
						};
					},
					{ addProfileTask: Re, updateProfileTask: Be }
				)(et),
				at = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								title: "",
								profileSequence: "",
								profileIdentifier: "",
								levelLanguage: "",
								language: "",
								create_At: "",
								profile: {},
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									console.log(this.state), console.log(this.props);
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									if ((e.preventDefault(), "Add" === this.props.typeForm)) {
										var t = Object(H.a)({}, this.props, {
											profile: Object(H.a)({}, this.props.profile, {
												levelLanguage: this.state.levelLanguage,
												language: this.state.language,
												taskType: this.props.taskType,
											}),
										});
										this.props.addProfileTask(
											this.props.profileIdentifier,
											t.profile,
											this.props.history
										);
									} else {
										var a = {
											id: this.state.id,
											levelLanguage: this.state.levelLanguage,
											language: this.state.language,
										};
										this.props.updateProfileTask(
											this.state.profileIdentifier,
											this.state.profileSequence,
											a,
											this.props.history
										);
									}
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props,
										t = e.errors,
										a = e.typeForm;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/editcv/".concat(
																this.props.profileIdentifier
															),
															className: "btn btn-light",
														},
														"Back to Edit CV"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														a,
														" Language"
													),
													o.a.createElement(
														"div",
														{ className: "lead text-center" },
														o.a.createElement("hr", null),
														this.props.profile.profileSequence &&
															o.a.createElement(
																"span",
																null,
																"Language ID: ",
																this.props.profile.profileSequence,
																" "
															),
														t.profileNotFound &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																"Please Check the fields above:",
																o.a.createElement("hr", null),
																t.profileNotFound
															)
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement("h6", null, "Organization:"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": t.language,
																}),
																name: "language",
																placeholder: "Language",
																value: this.state.language,
																onChange: this.onChange,
															}),
															t.language &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	t.language
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"h6",
																null,
																"Qualification Awarded :"
															),
															o.a.createElement(
																"select",
																{
																	className: M()(
																		"form-control form-control-lg",
																		{ "is-invalid": t.levelLanguage }
																	),
																	name: "levelLanguage",
																	value: this.state.levelLanguage,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: "" },
																	"Level"
																),
																o.a.createElement(
																	"option",
																	{ value: "Beginner" },
																	"Beginner"
																),
																o.a.createElement(
																	"option",
																	{ value: "Medium" },
																	"Medium"
																),
																o.a.createElement(
																	"option",
																	{ value: "Fluent" },
																	"Fluent"
																),
																o.a.createElement(
																	"option",
																	{ value: "Mother Tongue" },
																	"Mother Tongue"
																)
															),
															t.levelLanguage &&
																o.a.createElement(
																	"div",
																	{
																		style: {
																			width: "100%",
																			marginTop: ".25rem",
																			fontSize: "80%",
																			color: "#dc3545",
																		},
																	},
																	t.levelLanguage
																)
														),
														o.a.createElement("input", {
															type: "submit",
															value: "Save",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				nt = Object(h.b)(
					function (e) {
						return {
							title: e.title,
							profile: e.profile.profile,
							errors: e.errors,
						};
					},
					{ addProfileTask: Re, updateProfileTask: Be }
				)(at),
				rt = a(68),
				ot = a(316),
				st = a(318),
				it = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								profileSequence: "",
								profileIdentifier: "",
								start_date: "",
								end_date: "",
								months: "",
								position: "",
								company: "",
								generalContext: "",
								responsibility: [],
								technicalEnviroment: "",
								create_At: "",
								profile_task: {},
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onChangeText = e.onChangeText.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									if (
										(e.errors && this.setState({ errors: e.errors }),
										"Update" === this.props.typeForm &&
											e.profile_task !== this.state.profile_task)
									) {
										e.profile_task &&
											this.setState({ profile_task: e.profile_task });
										var t = e.profile_task,
											a = t.id,
											n = t.profileSequence,
											r = t.profileIdentifier,
											o = t.start_date,
											s = t.end_date,
											i = t.months,
											c = t.position,
											l = t.company,
											m = t.generalContext,
											u = t.responsibility,
											p = t.technicalEnviroment,
											d = t.create_At;
										u &&
											this.setState({
												responsibility: u.sort(function (e, t) {
													return e.respOrder - t.respOrder;
												}),
											}),
											this.setState({
												id: a,
												profileSequence: n,
												profileIdentifier: r,
												start_date: o,
												end_date: s,
												months: i,
												position: c,
												company: l,
												generalContext: m,
												responsibility: u,
												technicalEnviroment: p,
												create_At: d,
											});
									}
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onChangeText",
								value: function (e) {
									e &&
										(/^[0-9]+$/.test(e.toString())
											? this.setState({ educYear: e.toString() })
											: this.setState({ educYear: "" }));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									if ((e.preventDefault(), "Add" === this.props.typeForm)) {
										var t = Object(H.a)({}, this.props, {
											profile: Object(H.a)({}, this.props.profile, {
												start_date: this.state.start_date,
												end_date: this.state.end_date,
												months: this.state.months,
												position: this.state.position,
												company: this.state.company,
												generalContext: this.state.generalContext,
												responsibility: this.state.responsibility,
												technicalEnviroment: this.state.technicalEnviroment,
												taskType: this.props.taskType,
											}),
										});
										this.props.addProfileTask(
											this.props.profileIdentifier,
											t.profile,
											this.props.history
										);
									} else {
										var a = {
											id: this.state.id,
											start_date: this.state.start_date,
											end_date: this.state.end_date,
											months: this.state.months,
											position: this.state.position,
											company: this.state.company,
											generalContext: this.state.generalContext,
											responsibility: this.state.responsibility,
											technicalEnviroment: this.state.technicalEnviroment,
										};
										this.props.updateProfileTask(
											this.state.profileIdentifier,
											this.state.profileSequence,
											a,
											this.props.history
										);
									}
								},
							},
							{
								key: "addResponsability",
								value: function () {
									var e = this.state.responsibility;
									this.setState({
										responsibility: [].concat(Object(rt.a)(e), [
											{ id: e.length, prompt: "", answer: "" },
										]),
									});
								},
							},
							{
								key: "updateResponsabilityPart",
								value: function (e, t, a) {
									var n = this.state.responsibility;
									(n[t][a] = e.target.value),
										this.setState({ responsibility: n });
								},
							},
							{
								key: "addStack",
								value: function () {
									this.props.addStack(this.state);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this,
										t = this.props,
										a = t.errors,
										n = t.typeForm;
									t.responsibility;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/editcv/".concat(
																this.props.profileIdentifier
															),
															className: "btn btn-light",
														},
														"Back to Edit CV"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														n,
														" Client/Project"
													),
													o.a.createElement(
														"div",
														{ className: "lead text-center" },
														o.a.createElement("hr", null),
														this.props.profileSequence &&
															o.a.createElement(
																"span",
																null,
																"Client/Project ID: ",
																this.props.profileSequence,
																" "
															),
														a.profileNotFound &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																"Please Check the fields above:",
																o.a.createElement("hr", null),
																a.profileNotFound
															)
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "container" },
															o.a.createElement(
																"div",
																{ className: "row" },
																o.a.createElement(
																	"div",
																	{ className: "form-group col" },
																	o.a.createElement("h6", null, "Start Date"),
																	o.a.createElement("input", {
																		type: "date",
																		className: M()(
																			"form-control form-control-lg",
																			{ "is-invalid": a.datesProject }
																		),
																		name: "start_date",
																		value: this.state.start_date,
																		onChange: this.onChange,
																	})
																),
																o.a.createElement(
																	"div",
																	{ className: "form-group col" },
																	o.a.createElement("h6", null, "End Date"),
																	o.a.createElement("input", {
																		type: "date",
																		className: M()(
																			"form-control form-control-lg",
																			{ "is-invalid": a.datesProject }
																		),
																		name: "end_date",
																		value: this.state.end_date,
																		onChange: this.onChange,
																	})
																),
																o.a.createElement(
																	"div",
																	{ className: "col-12 text-center" },
																	a.datesProject &&
																		o.a.createElement(
																			"div",
																			{
																				style: {
																					width: "100%",
																					marginTop: ".25rem",
																					fontSize: "80%",
																					color: "#dc3545",
																				},
																			},
																			a.datesProject
																		)
																)
															)
														),
														o.a.createElement("h6", null, "Position:"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": a.position,
																}),
																placeholder: "Position",
																name: "position",
																value: this.state.position,
																onChange: this.onChange,
																style: {
																	marginTop: "0px",
																	marginBottom: "0px",
																	height: "100px",
																},
															}),
															a.position &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	a.position
																)
														),
														o.a.createElement("h6", null, "Company:"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": a.company,
																}),
																placeholder: "Company",
																name: "company",
																value: this.state.company,
																onChange: this.onChange,
																style: {
																	marginTop: "0px",
																	marginBottom: "0px",
																	height: "100px",
																},
															}),
															a.company &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	a.company
																)
														),
														o.a.createElement("h6", null, "General Context:"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": a.generalContext,
																}),
																placeholder: "General Context",
																name: "generalContext",
																value: this.state.generalContext,
																onChange: this.onChange,
																style: {
																	marginTop: "0px",
																	marginBottom: "0px",
																	height: "100px",
																},
															}),
															a.generalContext &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	a.generalContext
																)
														),
														o.a.createElement("h6", null, "Responsibility:"),
														(function (t, a, n) {
															return "undefined" === typeof a || a.length < 1
																? o.a.createElement(
																		"div",
																		null,
																		" ",
																		o.a.createElement(
																			"div",
																			{
																				className:
																					"alert alert-danger text-center",
																				role: "alert",
																			},
																			"Please add Responsibility (max caracteres: 100)"
																		)
																  )
																: o.a.createElement(
																		"div",
																		null,
																		o.a.createElement("hr", null),
																		o.a.createElement(
																			"div",
																			{ className: "container" },
																			o.a.createElement(
																				"div",
																				{ className: "row" },
																				o.a.createElement(
																					"div",
																					{ className: "form-group col" },
																					o.a.createElement(
																						"div",
																						{ className: "col-6 text-left" },
																						o.a.createElement(
																							ot.a,
																							null,
																							"Role/function:"
																						)
																					)
																				),
																				o.a.createElement(
																					"div",
																					{ className: "form-group col" },
																					o.a.createElement(
																						"div",
																						{ className: "col-6 text-left" },
																						o.a.createElement(
																							ot.a,
																							null,
																							"Activities/Tasks:"
																						)
																					)
																				)
																			),
																			e.state.responsibility.map(function (
																				a,
																				n
																			) {
																				return o.a.createElement(
																					"div",
																					{ key: a.respOrder },
																					o.a.createElement(
																						"div",
																						{ className: "row" },
																						o.a.createElement(
																							"div",
																							{ className: "form-group col" },
																							o.a.createElement(
																								"div",
																								{
																									className: "col-12 text-left",
																								},
																								o.a.createElement("textarea", {
																									placeholder:
																										"e.g: Functional & technical analyst",
																									name: "respFunction",
																									value: a.respFunction,
																									onChange: function (t) {
																										return e.updateResponsabilityPart(
																											t,
																											n,
																											"respFunction"
																										);
																									},
																									className: M()(
																										"form-control form-control-lg",
																										{
																											"is-invalid":
																												t.reponsibility,
																										}
																									),
																								})
																							)
																						),
																						o.a.createElement(
																							"div",
																							{ className: "form-group col" },
																							o.a.createElement(
																								"div",
																								{
																									className:
																										"col-12 text-right",
																								},
																								o.a.createElement("textarea", {
																									placeholder:
																										"Exc.: Write technical analysis for...",
																									name: "respTask",
																									value: a.respTask,
																									onChange: function (t) {
																										return e.updateResponsabilityPart(
																											t,
																											n,
																											"respTask"
																										);
																									},
																									className: M()(
																										"form-control form-control-lg",
																										{
																											"is-invalid":
																												t.reponsibility,
																										}
																									),
																								})
																							)
																						)
																					)
																				);
																			}),
																			o.a.createElement(
																				"div",
																				{ className: "text-center" },
																				t.reponsibility &&
																					o.a.createElement(
																						"div",
																						{
																							className: "alert alert-danger",
																							role: "alert",
																							style: {
																								width: "100%",
																								marginTop: ".25rem",
																								fontSize: "80%",
																								color: "#dc3545",
																							},
																						},
																						t.reponsibility
																					)
																			)
																		)
																  );
														})(a, this.state.responsibility),
														o.a.createElement("hr", null),
														o.a.createElement(
															st.a,
															{
																caption: "Add Responsability",
																className: "btn btn-light",
																onClick: function () {
																	return e.addResponsability();
																},
															},
															"Add Responsability"
														),
														o.a.createElement("hr", null),
														o.a.createElement(
															"h6",
															null,
															"Technical Enviroment:"
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": a.technicalEnviroment,
																}),
																placeholder: "Technical Enviroment",
																name: "technicalEnviroment",
																value: this.state.technicalEnviroment,
																onChange: this.onChange,
																style: {
																	marginTop: "0px",
																	marginBottom: "0px",
																	height: "100px",
																},
															}),
															a.technicalEnviroment &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	a.technicalEnviroment
																)
														),
														o.a.createElement("input", {
															type: "submit",
															value: "Save",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				ct = Object(h.b)(
					function (e) {
						return {
							profile_task: e.profileBacklog.profile_task,
							errors: e.errors,
						};
					},
					{ addProfileTask: Re, updateProfileTask: Be }
				)(it),
				lt = (function (e) {
					function t(e) {
						var a;
						Object(c.a)(this, t);
						var n = (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).props
								.match.params,
							r = n.id,
							o = n.taskType;
						return (
							(a.state = {
								taskType: o,
								priority: 0,
								profileIdentifier: r,
								errors: {},
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									var e = this,
										t = this.props.match.params,
										a = t.id,
										n = t.taskType;
									return o.a.createElement(
										"div",
										null,
										(function (t) {
											return "skill" === t
												? o.a.createElement(tt, {
														typeForm: "Add",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
												  })
												: "educ" === t
												? o.a.createElement(Ze, {
														typeForm: "Add",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
												  })
												: "lang" === t
												? o.a.createElement(nt, {
														typeForm: "Add",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
												  })
												: "cliPrj" === t
												? o.a.createElement(ct, {
														typeForm: "Add",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
												  })
												: void 0;
										})(n)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				mt = Object(h.b)(
					function (e) {
						return { errors: e.errors, profile: e.profile.profile };
					},
					{ addProfileTask: Re }
				)(lt),
				ut = (function (e) {
					function t(e) {
						var a;
						Object(c.a)(this, t);
						var n = (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).props
								.match.params,
							r = n.profile_backlog_id,
							o = n.pt_id,
							s = n.taskType;
						return (
							(a.state = {
								taskType: s,
								priority: 0,
								profileIdentifier: r,
								profileSequence: o,
								totalYears: 0,
								profile_task: {},
								errors: {},
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									this.props.getProfileTask(
										this.state.profileIdentifier,
										this.state.profileSequence,
										this.props.history
									);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this,
										t = this.props.match.params,
										a = t.profile_backlog_id,
										n = t.pt_id,
										r = t.taskType;
									return o.a.createElement(
										"div",
										null,
										(function (t) {
											return "skill" === t
												? o.a.createElement(tt, {
														typeForm: "Update",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
														profileSequence: n,
												  })
												: "educ" === t
												? o.a.createElement(Ze, {
														typeForm: "Update",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
														profileSequence: n,
												  })
												: "lang" === t
												? o.a.createElement(nt, {
														typeForm: "Update",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
														profileSequence: n,
												  })
												: "cliPrj" === t
												? o.a.createElement(ct, {
														typeForm: "Update",
														taskType: t,
														history: e.props.history,
														profileIdentifier: a,
														profileSequence: n,
												  })
												: void 0;
										})(r)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				pt = Object(h.b)(
					function (e) {
						return {
							profile_task: e.profileBacklog.profile_task,
							errors: e.errors,
						};
					},
					{
						getProfileTask: function (e, t, a) {
							return (function () {
								var a = Object(E.a)(
									v.a.mark(function a(n) {
										var r;
										return v.a.wrap(
											function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(a.prev = 0),
																(a.next = 3),
																b.a.get(
																	"/api/cvbacklog/".concat(e, "/").concat(t)
																)
															);
														case 3:
															(r = a.sent),
																n({
																	type: "GET_PROFILE_TASK",
																	payload: r.data,
																}),
																n({ type: y, payload: {} }),
																(a.next = 11);
															break;
														case 8:
															(a.prev = 8),
																(a.t0 = a.catch(0)),
																n({ type: y, payload: a.t0.response.data });
														case 11:
														case "end":
															return a.stop();
													}
											},
											a,
											null,
											[[0, 8]]
										);
									})
								);
								return function (e) {
									return a.apply(this, arguments);
								};
							})();
						},
					}
				)(ut),
				dt = function () {
					return o.a.createElement(
						"div",
						{ className: "landing" },
						o.a.createElement(
							"div",
							{ className: "light-overlay landing-inner text-dark" },
							o.a.createElement(
								"div",
								{ className: "container" },
								o.a.createElement(
									"div",
									{ className: "row" },
									o.a.createElement(
										"div",
										{ className: "col-md-12 text-center" },
										o.a.createElement(
											"h1",
											{ className: "display-3 mb-4" },
											"Parabéns pela aquisição do e-book, você o receberá por e-mail em breve. Management Tool"
										),
										o.a.createElement(
											"p",
											{ className: "lead" },
											"Create your account to join active projects / automation tests or start your own"
										)
									)
								)
							)
						)
					);
				},
				ht = (function (e) {
					function t(e) {
						var a;
						return (
							Object(c.a)(this, t),
							((a = Object(m.a)(this, Object(u.a)(t).call(this, e))).state = {
								errors: {},
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props.match.params.id,
										t = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "landing" },
										o.a.createElement(
											"div",
											{ className: "light-overlay landing-inner text-dark" },
											o.a.createElement(
												"div",
												{ className: "container" },
												o.a.createElement(
													"div",
													{ className: "row" },
													o.a.createElement(
														"div",
														{ className: "col-md-12 text-center" },
														o.a.createElement(
															"h1",
															{ className: "display-3 mb-4" },
															"Automation Tests Management"
														),
														o.a.createElement("hr", null),
														o.a.createElement(
															"div",
															{
																className: "alert alert-info text-center",
																role: "alert",
															},
															"The Link ",
															e,
															" is Inactive"
														),
														o.a.createElement("hr", null),
														t.candidateEmail &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																t.candidateEmail,
																o.a.createElement("hr", null)
															),
														t.tokenMessage &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																t.tokenMessage,
																o.a.createElement("hr", null)
															),
														t.profileNotfound &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																t.profileNotfound,
																o.a.createElement("hr", null)
															)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				ft = Object(h.b)(function (e) {
					return { errors: e.errors };
				})(ht),
				vt =
					(a(223),
					(function (e) {
						function t() {
							return (
								Object(c.a)(this, t),
								Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
							);
						}
						return (
							Object(p.a)(t, e),
							Object(l.a)(t, [
								{
									key: "onDeleteClick",
									value: function (e, t) {
										this.props.deleteAutomationTask(e, t);
									},
								},
								{
									key: "render",
									value: function () {
										var e,
											t,
											a = this.props.automation_task;
										return (
											1 === a.priority &&
												((t = "bg-high text-light"), (e = "HIGH")),
											2 === a.priority &&
												((t = "bg-medium text-light"), (e = "MEDIUM")),
											3 === a.priority &&
												((t = "bg-low text-light"), (e = "LOW")),
											o.a.createElement(
												"div",
												{ className: "card mb-1 bg-light" },
												o.a.createElement(
													"div",
													{ className: "card-header text-primary ".concat(t) },
													"ID: ",
													a.projectSequence,
													" -- Priority: ",
													e
												),
												o.a.createElement(
													"div",
													{ className: "card-body bg-light" },
													o.a.createElement(
														"h5",
														{ className: "card-title" },
														a.summary
													),
													o.a.createElement(
														"p",
														{ className: "card-text text-truncate " },
														a.acceptanceCriteria
													),
													o.a.createElement(
														d.b,
														{
															to: "/updateAutomationTask/"
																.concat(a.projectIdentifier, "/")
																.concat(a.projectSequence),
															className: "btn btn-primary",
														},
														"View / Update"
													),
													o.a.createElement(
														"button",
														{
															className: "btn btn-info ml-4",
															onClick: this.onDeleteClick.bind(
																this,
																a.projectIdentifier,
																a.projectSequence
															),
														},
														"Delete"
													)
												)
											)
										);
									},
								},
							]),
							t
						);
					})(r.Component)),
				Et = Object(h.b)(null, {
					deleteAutomationTask: function (e, t) {
						return (function () {
							var a = Object(E.a)(
								v.a.mark(function a(n) {
									return v.a.wrap(function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													if (
														!window.confirm(
															"You are deleting automation task ".concat(
																t,
																", this action cannot be undone"
															)
														)
													) {
														a.next = 4;
														break;
													}
													return (
														(a.next = 3),
														b.a.delete(
															"/api/backlog/automationTask/"
																.concat(e, "/")
																.concat(t)
														)
													);
												case 3:
													n({ type: "DELETE_AUTOMATION_TASK", payload: t });
												case 4:
												case "end":
													return a.stop();
											}
									}, a);
								})
							);
							return function (e) {
								return a.apply(this, arguments);
							};
						})();
					},
				})(vt),
				gt = a(51),
				bt = a(142),
				yt = a.n(bt),
				kt =
					(a(40),
					function (e) {
						return o.a.createElement(
							"button",
							{ className: "btn pink darken-4", onClick: e.toggle },
							e.name
						);
					}),
				Nt = (function (e) {
					function t(e) {
						var a;
						return (
							Object(c.a)(this, t),
							((a = Object(m.a)(this, Object(u.a)(t).call(this, e))).state = {
								isOpen: !1,
							}),
							(a.toggle = a.toggle.bind(Object(L.a)(a))),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "toggle",
								value: function () {
									this.setState(function (e) {
										return { isOpen: !e.isOpen };
									});
								},
							},
							{
								key: "render",
								value: function () {
									return o.a.createElement(
										"div",
										{ className: "container mg-top" },
										o.a.createElement(kt, {
											name: this.state.isOpen ? "Hide" : "Show",
											toggle: this.toggle,
										}),
										this.state.isOpen &&
											o.a.createElement(
												"div",
												{ className: "card-panel pink darken-2" },
												o.a.createElement(
													"span",
													{ className: "white-text" },
													"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks."
												)
											)
									);
								},
							},
						]),
						t
					);
				})(o.a.Component),
				jt = {},
				Ot = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								errors: {},
								projectIdentifier: "",
								projectSequence: "",
								automation_tasks: {},
								isOpen: !1,
								client: null,
							}),
							(e.initRsocketWebSocket = e.initRsocketWebSocket.bind(
								Object(L.a)(e)
							)),
							(e.addErrorMessage = e.addErrorMessage.bind(Object(L.a)(e))),
							(e.reloadMessages = e.reloadMessages.bind(Object(L.a)(e))),
							(e.toggle = e.toggle.bind(Object(L.a)(e))),
							(e.CloseOpenRSockets = e.CloseOpenRSockets.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(
							t,
							[
								{
									key: "toggle",
									value: function () {
										this.setState(function (e) {
											return { isOpen: !e.isOpen };
										});
									},
								},
								{
									key: "reloadMessages",
									value: function (e) {
										var t = this;
										this.props.automation_tasks_prop.map(function (a, n) {
											return a.projectSequence === e.projectSequence &&
												a.status !== e.status
												? t.props.updateRSocketAutomationTask(e)
												: null;
										});
									},
								},
								{
									key: "CloseOpenRSockets",
									value: function (e) {
										var t = this;
										e.map(function (e) {
											return t.initRsocketWebSocket(e.projectSequence);
										});
									},
								},
								{
									key: "componentDidUpdate",
									value: function (e, t) {
										e.automation_tasks_prop &&
											this.state.automation_tasks &&
											e.automation_tasks_prop.length > 0 &&
											this.state.automation_tasks.length > 0 &&
											e.automation_tasks_prop[0].operationName !==
												this.state.automation_tasks[0].operationName &&
											void 0 !== jt &&
											(e.automation_tasks_prop.forEach(function (e, t) {
												jt[e.projectSequence] && jt[e.projectSequence].close();
											}),
											(jt = {}),
											console.log("CloseOpenRSockets"),
											this.CloseOpenRSockets(this.state.automation_tasks));
									},
								},
								{
									key: "componentDidMount",
									value: function () {
										var e = this.props.automation_tasks_prop;
										this.CloseOpenRSockets(e);
									},
								},
								{
									key: "initRsocketWebSocket",
									value: function (e) {
										var t = this;
										void 0 !== jt[e] && jt[e].close();
										var a = new gt.RSocketClient({
											serializers: {
												data: gt.JsonSerializer,
												metadata: gt.IdentitySerializer,
											},
											setup: {
												keepAlive: 6e4,
												lifetime: 18e4,
												dataMimeType: "application/json",
												metadataMimeType: "message/x.rsocket.routing.v0",
											},
											transport: new yt.a({
												url: "ws://localhost:8995/tweetsocket",
											}),
										});
										(jt[e] = a),
											jt[e].connect().subscribe({
												onComplete: function (a) {
													a.requestStream({
														data: { projectSequence: e },
														metadata:
															String.fromCharCode("tweets.by.author".length) +
															"tweets.by.author",
													}).subscribe({
														onComplete: function () {
															return console.log("complete");
														},
														onError: function (a) {
															t.addErrorMessage(
																e,
																"Connection has been closed due to ",
																a
															);
														},
														onNext: function (e) {
															t.reloadMessages(e.data);
														},
														onSubscribe: function (e) {
															e.request(2147483647);
														},
													});
												},
												onError: function (a) {
													t.addErrorMessage(
														e,
														"Connection has been refused due to ",
														a
													);
												},
												onSubscribe: function (e) {},
											});
									},
								},
								{ key: "addErrorMessage", value: function (e, t, a) {} },
								{
									key: "render",
									value: function () {
										for (
											var e = this.state.automation_tasks.map(function (e) {
													return o.a.createElement(Et, {
														key: e.id,
														automation_task: e,
													});
												}),
												t = [],
												a = [],
												n = [],
												r = 0;
											r < e.length;
											r++
										)
											"IN_HOLD" === e[r].props.automation_task.status &&
												t.push(e[r]),
												"FAILLED" === e[r].props.automation_task.status &&
													a.push(e[r]),
												"SUCCESS" === e[r].props.automation_task.status &&
													n.push(e[r]);
										return o.a.createElement(
											o.a.Fragment,
											null,
											o.a.createElement(Nt, null),
											o.a.createElement("hr", null),
											o.a.createElement(
												"div",
												{ className: "container" },
												o.a.createElement(
													"div",
													{ className: "row" },
													o.a.createElement(
														"div",
														{ className: "col-md-4" },
														o.a.createElement(
															"div",
															{ className: "card text-center mb-2" },
															o.a.createElement(
																"div",
																{
																	className:
																		"card-header bg-in-hold text-white",
																},
																o.a.createElement("h3", null, "In Hold")
															)
														),
														t
													),
													o.a.createElement(
														"div",
														{ className: "col-md-4" },
														o.a.createElement(
															"div",
															{ className: "card text-center mb-2" },
															o.a.createElement(
																"div",
																{
																	className:
																		"card-header bg-failled text-white",
																},
																o.a.createElement("h3", null, "Failled")
															)
														),
														a
													),
													o.a.createElement(
														"div",
														{ className: "col-md-4" },
														o.a.createElement(
															"div",
															{ className: "card text-center mb-2" },
															o.a.createElement(
																"div",
																{
																	className:
																		"card-header bg-success text-white",
																},
																o.a.createElement("h3", null, "Success")
															)
														),
														n
													)
												)
											)
										);
									},
								},
							],
							[
								{
									key: "getDerivedStateFromProps",
									value: function (e, t) {
										return {
											errors: e.errors,
											projectIdentifier: t.projectIdentifier,
											automation_tasks:
												e.automation_tasks_prop !== t.automation_tasks
													? e.automation_tasks_prop
													: t.automation_tasks,
										};
									},
								},
							]
						),
						t
					);
				})(r.Component),
				Ct = Object(h.b)(
					function (e) {
						return { backlog: e.backlog, errors: e.errors };
					},
					{
						updateRSocketAutomationTask: function (e) {
							return (function () {
								var t = Object(E.a)(
									v.a.mark(function t(a) {
										return v.a.wrap(function (t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														a({ type: "UPDATE_STATUS_RSOCKET", payload: e });
													case 1:
													case "end":
														return t.stop();
												}
										}, t);
									})
								);
								return function (e) {
									return t.apply(this, arguments);
								};
							})();
						},
					}
				)(Ot),
				St = a(67),
				xt = a(319),
				Tt = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(
								this,
								Object(u.a)(t).call(this)
							)).handleChange = function (t) {
								e.props.getAutomationTaskByOperation(
									e.state.projectIdentifier,
									t.value
								),
									localStorage.setItem("selectedOption", JSON.stringify(t));
							}),
							(e.state = {
								errors: {},
								projectIdentifier: "",
								selectedOption: {},
								all_operations: {},
								operations: [{ message: "Select" }],
								automation_tasks: {},
							}),
							(e.handleStartRefresh = e.handleStartRefresh.bind(
								Object(L.a)(e)
							)),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(
							t,
							[
								{
									key: "componentDidMount",
									value: function () {
										var e = this.props.match.params.id;
										this.setState({ projectIdentifier: e }),
											this.props.getAllOperationByBackLog(e);
									},
								},
								{
									key: "handleStartRefresh",
									value: function () {
										var e = this;
										null != this.state.selectedOption &&
											(this.intervalLoop = setInterval(function () {
												return e.setState(function (t) {
													e.props.getAutomationTaskByOperation(
														e.state.projectIdentifier,
														e.state.selectedOption.value
													),
														console.log(
															"Refreshing Task for: " +
																e.state.selectedOption.value
														);
												});
											}, 2e3));
									},
								},
								{
									key: "onReloadDataClick",
									value: function (e, t) {
										this.props.getAutomationTaskByOperation(e, t);
									},
								},
								{
									key: "render",
									value: function () {
										var e,
											t = this.props.match.params.id,
											a = this.props.backlog,
											n = a.automation_tasks,
											r = a.all_operations,
											s = this.state.errors;
										return (
											(e = (function (e, t) {
												return t.length < 1
													? e.projectNotFound
														? o.a.createElement(
																"div",
																{
																	className: "alert alert-danger text-center",
																	role: "alert",
																},
																e.projectNotFound
														  )
														: e.projectIdentifier
														? o.a.createElement(
																"div",
																{
																	className: "alert alert-danger text-center",
																	role: "alert",
																},
																e.projectIdentifier
														  )
														: o.a.createElement(
																"div",
																{
																	className: "alert alert-info text-center",
																	role: "alert",
																},
																"No Automation Tasks on this board"
														  )
													: o.a.createElement(Ct, { automation_tasks_prop: n });
											})(s, n)),
											o.a.createElement(
												o.a.Fragment,
												null,
												o.a.createElement(
													"div",
													{ className: "container" },
													o.a.createElement(
														"div",
														{ className: "row" },
														o.a.createElement(
															"div",
															{ className: "col-md-4" },
															o.a.createElement(
																d.b,
																{
																	to: "/addAutomationTask/".concat(t),
																	className: "btn btn-primary mb-3",
																},
																o.a.createElement(
																	"i",
																	{ className: "fas fa-plus-circle" },
																	" ",
																	"Create Automation Task"
																)
															)
														),
														o.a.createElement(
															"div",
															{ className: "col-md-4" },
															o.a.createElement(
																d.b,
																{
																	to: "/automationGridBoard/".concat(t),
																	className: "btn btn-info",
																},
																o.a.createElement(
																	"i",
																	{ className: "fas fa-plus-circle" },
																	" ",
																	"Automation Grid Board",
																	" "
																)
															)
														),
														o.a.createElement("div", { className: "col-md-4" })
													),
													o.a.createElement("br", null),
													o.a.createElement("hr", null),
													o.a.createElement(
														"h1",
														{ id: "title" },
														n.length > 0 && n[0].projectIdentifier
													),
													o.a.createElement("hr", null),
													n.length > 0 &&
														o.a.createElement(
															o.a.Fragment,
															null,
															o.a.createElement(
																"div",
																{ id: "operation" },
																"Operation Selected:"
															),
															o.a.createElement(
																"div",
																{ id: "operation" },
																o.a.createElement(
																	"button",
																	{
																		type: "button",
																		className: "btn btn-outline-primary",
																		onClick: this.onReloadDataClick.bind(
																			this,
																			n[0].projectIdentifier,
																			n[0].operationName
																		),
																	},
																	Object(xt.a)(n[0].operationName)
																)
															)
														),
													o.a.createElement(
														"div",
														{ className: "form-group" },
														o.a.createElement(
															"h6",
															null,
															"Operation / Resource :"
														),
														o.a.createElement(St.a, {
															value: this.state.selectedOption,
															onChange: this.handleChange,
															options: r,
															clearable: !0,
														}),
														s.selectedOption &&
															o.a.createElement(
																"div",
																{
																	style: {
																		width: "100%",
																		marginTop: ".25rem",
																		fontSize: "80%",
																		color: "#dc3545",
																	},
																},
																s.selectedOption
															)
													),
													e
												)
											)
										);
									},
								},
							],
							[
								{
									key: "getDerivedStateFromProps",
									value: function (e, t) {
										var a = JSON.parse(localStorage.getItem("selectedOption"));
										return a
											? {
													errors: e.errors,
													projectIdentifier: t.projectIdentifier,
													selectedOption:
														a.value !== t.selectedOption.value
															? a
															: t.selectedOption,
													all_operations:
														e.backlog.all_operations !== t.all_operations
															? e.backlog.all_operations
															: t.all_operations,
											  }
											: null;
									},
								},
							]
						),
						t
					);
				})(r.Component),
				wt = Object(h.b)(
					function (e) {
						return { backlog: e.backlog, errors: e.errors };
					},
					{ getAllOperationByBackLog: ie, getAutomationTaskByOperation: ce }
				)(Tt),
				Pt =
					(a(242),
					(function (e) {
						function t() {
							return (
								Object(c.a)(this, t),
								Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
							);
						}
						return (
							Object(p.a)(t, e),
							Object(l.a)(t, [
								{
									key: "render",
									value: function () {
										return o.a.createElement(
											"span",
											{ className: "window-control" },
											o.a.createElement("i", { className: "icon minus" }),
											o.a.createElement("i", {
												className: "icon expand",
												onClick: this.props.expandWindow,
											}),
											o.a.createElement("i", { className: "icon remove" })
										);
									},
								},
							]),
							t
						);
					})(r.Component)),
				_t = Object(h.b)(
					function (e) {
						return {
							expandWindow: e.expandWindow,
							compressWindow: e.compressWindow,
						};
					},
					{ expandWindow: r.expandWindow, compressWindow: r.compressWindow }
				)(Pt),
				It = (function (e) {
					function t(e) {
						var a;
						return (
							Object(c.a)(this, t),
							((a = Object(m.a)(this, Object(u.a)(t).call(this, e))).state = {
								expandWindow: !0,
								compressWindow: !0,
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									return o.a.createElement(
										"div",
										{ className: "window-header" },
										o.a.createElement(
											"span",
											{ className: "window-title" },
											"Window title"
										),
										o.a.createElement(_t, {
											expandWindow: this.state.expandWindow,
											compressWindow: this.state.compressWindow,
										})
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Dt = Object(h.b)(
					function (e) {
						return {
							expandWindow: e.expandWindow,
							compressWindow: e.compressWindow,
						};
					},
					{ expandWindow: r.expandWindow, compressWindow: r.compressWindow }
				)(It),
				At = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									return o.a.createElement(
										"div",
										{ className: "window-content" },
										"Status Response"
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Rt = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									return o.a.createElement(
										"div",
										{ className: "window-statusbar" },
										o.a.createElement(
											"span",
											{ className: "window-status" },
											"Status bar"
										),
										o.a.createElement(
											"span",
											{ className: "window-resize-control" },
											o.a.createElement("i", { className: "icon maximize" })
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Bt = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "render",
								value: function () {
									return o.a.createElement(
										"div",
										{ className: "window" },
										o.a.createElement(Dt, null),
										o.a.createElement(At, null),
										o.a.createElement(Rt, null)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Lt = a(143),
				Ft = a.n(Lt),
				Mt = (a(276), a(317)),
				Ut = (function (e) {
					function t() {
						return (
							Object(c.a)(this, t),
							Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "onGenerateExpectedClick",
								value: function (e, t) {
									var a = {};
									(a["#ExpectedToken#.".concat(t)] =
										"code.999,status.Gathering Responses,message.Change IT"),
										this.props.generateExpectedFields(e, a);
								},
							},
							{
								key: "onDisputeClick",
								value: function (e, t, a, n, r, o) {
									this.props.disputeAutomationTask(e, t, a, n, r, o);
								},
							},
							{
								key: "getParsedDate",
								value: function (e) {
									return (e = String(e).split(" ")), String(e[0]);
								},
							},
							{
								key: "getParsedTime",
								value: function (e) {
									return (e = String(e).split(" ")), String(e[1]);
								},
							},
							{
								key: "render",
								value: function () {
									for (
										var e,
											t,
											a = this,
											n = this.props.automation_tasks_prop,
											r = n.map(function (e) {
												return o.a.createElement(Et, {
													key: e.id,
													automation_task: e,
												});
											}),
											s = [],
											i = [],
											c = [],
											l = [],
											m = 0;
										m < r.length;
										m++
									)
										l.push(n[m]),
											"IN_HOLD" === r[m].props.automation_task.status &&
												s.push(r[m]),
											"FAILLED" === r[m].props.automation_task.status &&
												i.push(r[m]),
											"SUCCESS" === r[m].props.automation_task.status &&
												c.push(r[m]);
									l &&
										(l = l.sort(function (e, t) {
											return e.orderTest - t.orderTest;
										}));
									var u = function (e) {
											return o.a.createElement(
												"div",
												{ className: "border border-empty text-light" },
												"XXXXXXXX"
											);
										},
										p = function (e) {
											return "IN_HOLD" === e
												? o.a.createElement(O, {
														link: "#",
														caption: e,
														cssClass: "btn btn-in-hold-task text-white ml-4",
												  })
												: "FAILLED" === e
												? o.a.createElement(O, {
														link: "#",
														caption: e,
														cssClass: "btn btn-failled-task text-white ml-4",
												  })
												: "SUCCESS" === e
												? o.a.createElement(O, {
														link: "#",
														caption: e,
														cssClass: "btn btn-success-task text-white ml-4",
												  })
												: o.a.createElement(
														"td",
														null,
														o.a.createElement(O, {
															link: "#",
															caption: "      X      ",
															cssClass: "btn btn-light",
														})
												  );
										};
									return (
										(e = (function (e) {
											var t = [];
											return (
												t.push("testCaseName"),
												t.push("projectSequence"),
												t.push("tokenTag"),
												t.push("fieldName"),
												t.push("expectedValue"),
												t.push("valueResponse"),
												t.push("succeeded"),
												t.push("priority"),
												t.push("dueDate"),
												t.push("update_At"),
												t.push("In Hold"),
												t.push("Failled"),
												t.push("Success"),
												t.push("Reset-Expected"),
												t.push("orderTest"),
												t.push("Dispute"),
												t.map(function (e, t) {
													return "id" !== e
														? "testCaseName" === e
															? o.a.createElement(
																	"th",
																	{ key: t, className: "test-case-name" },
																	Object(Mt.a)(e)
															  )
															: o.a.createElement(
																	"th",
																	{ key: t },
																	Object(Mt.a)(e)
															  )
														: null;
												})
											);
										})()),
										(t = l.map(function (e, t) {
											var n = e.id,
												r = e.projectIdentifier,
												s = e.projectSequence,
												i = e.status,
												c = e.priority,
												l = e.dueDate,
												m = e.testCaseName,
												d = (e.bodyResponse, e.update_At),
												h = e.operationName,
												f = e.tokenTag,
												v = e.fieldName,
												E = e.expectedValue,
												g = e.valueResponse,
												b = e.orderTest,
												y = e.succeeded;
											return o.a.createElement(
												"tr",
												{ key: n, className: "other-cols" },
												o.a.createElement(
													"td",
													{ className: "test-case-name" },
													o.a.createElement("div", { className: "fill-td" }, m)
												),
												o.a.createElement("td", null, s),
												o.a.createElement(
													"td",
													{ className: "test-case-name" },
													o.a.createElement("div", { className: "fill-td" }, f)
												),
												o.a.createElement("td", null, v),
												o.a.createElement("td", null, E),
												o.a.createElement("td", null, g),
												o.a.createElement("td", null, y ? "Yes" : "NO"),
												o.a.createElement(
													"td",
													{ className: "td-some-cols" },
													o.a.createElement(
														"div",
														{ className: "fill-center" },
														(function (e) {
															return 1 === e
																? o.a.createElement(
																		"div",
																		{
																			className:
																				"border border-high text-light",
																		},
																		"HIGH"
																  )
																: 2 === e
																? o.a.createElement(
																		"div",
																		{
																			className:
																				"border border-medium text-light",
																		},
																		"MEDIUM"
																  )
																: 3 === e
																? o.a.createElement(
																		"div",
																		{
																			className: "border border-low text-light",
																		},
																		"LOW"
																  )
																: void 0;
														})(c)
													)
												),
												o.a.createElement("td", null, l),
												o.a.createElement(
													"td",
													{ style: { width: 80 } },
													d &&
														o.a.createElement(
															o.a.Fragment,
															null,
															a.getParsedDate(d),
															o.a.createElement("br", null),
															a.getParsedTime(d)
														)
												),
												o.a.createElement(
													"td",
													{ className: "td-some-cols" },
													("IN_HOLD" === i && p(i)) || u()
												),
												o.a.createElement(
													"td",
													{ className: "td-some-cols" },
													("FAILLED" === i && p(i)) || u()
												),
												o.a.createElement(
													"td",
													{ className: "td-some-cols" },
													("SUCCESS" === i && p(i)) || u()
												),
												o.a.createElement(
													"td",
													null,
													o.a.createElement(
														"button",
														{
															className: "btn btn-warning ml-4",
															onClick: a.onGenerateExpectedClick.bind(a, h, f),
														},
														"Reset"
													)
												),
												o.a.createElement("td", null, b),
												o.a.createElement(
													"td",
													null,
													o.a.createElement(
														"button",
														{
															className: "btn btn-info ml-4",
															onClick: a.onDisputeClick.bind(
																a,
																r,
																s,
																h,
																f,
																v,
																g
															),
														},
														"Dispute"
													)
												)
											);
										})),
										o.a.createElement(
											o.a.Fragment,
											null,
											o.a.createElement(Bt, null),
											o.a.createElement(
												Ft.a,
												null,
												o.a.createElement(
													"table",
													{ id: "automation", className: "fixed" },
													o.a.createElement(
														"thead",
														null,
														o.a.createElement("tr", null, e)
													),
													o.a.createElement("tbody", null, t),
													o.a.createElement(
														"tfoot",
														null,
														o.a.createElement("tr", null, e)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				qt = Object(h.b)(null, {
					disputeAutomationTask: function (e, t, a, n, r, o) {
						return (function () {
							var s = Object(E.a)(
								v.a.mark(function s(i) {
									var c, l;
									return v.a.wrap(function (s) {
										for (;;)
											switch ((s.prev = s.next)) {
												case 0:
													return (
														(l = {
															headers: {
																"Content-Type":
																	"application/json; charset=UTF-8",
																"Access-Control-Allow-Origin": "*",
																"Access-Control-Allow-Headers": "Content-Type",
																"Access-Control-Allow-Methods": "POST",
															},
														}),
														((c = {})["#ExpectedToken#.".concat(n)] = ""
															.concat(r, ".")
															.concat(o)),
														(s.next = 5),
														b.a
															.post(
																"/v1/gathering/".concat(
																	a,
																	"?executeDataBinarioTask=true"
																),
																JSON.stringify(c),
																l
															)
															.then(function (e) {
																return console.log(e);
															})
															.catch(function (e) {
																return console.log("Login: ", e);
															})
													);
												case 5:
													return (
														(s.next = 7),
														b.a.get(
															"/api/backlog/disputeAutomationTask/"
																.concat(e, "/")
																.concat(t)
														)
													);
												case 7:
													i({ type: "DISPUTE_AUTOMATION_TASK", payload: t });
												case 8:
												case "end":
													return s.stop();
											}
									}, s);
								})
							);
							return function (e) {
								return s.apply(this, arguments);
							};
						})();
					},
					generateExpectedFields: function (e, t) {
						return (function () {
							var a = Object(E.a)(
								v.a.mark(function a(n) {
									var r;
									return v.a.wrap(function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													return (
														(r = {
															headers: {
																"Content-Type":
																	"application/json; charset=UTF-8",
																"Access-Control-Allow-Origin": "*",
																"Access-Control-Allow-Headers": "Content-Type",
																"Access-Control-Allow-Methods": "POST",
															},
														}),
														(a.next = 3),
														b.a
															.post(
																"/v1/gathering/".concat(
																	e,
																	"?executeDataBinarioTask=true"
																),
																JSON.stringify(t),
																r
															)
															.then(function (e) {
																return console.log(e);
															})
															.catch(function (e) {
																return console.log("Login: ", e);
															})
													);
												case 3:
												case "end":
													return a.stop();
											}
									}, a);
								})
							);
							return function (e) {
								return a.apply(this, arguments);
							};
						})();
					},
				})(Ut),
				Gt =
					(a(277),
					(function (e) {
						function t() {
							var e;
							return (
								Object(c.a)(this, t),
								((e = Object(m.a)(
									this,
									Object(u.a)(t).call(this)
								)).handleChange = function (t) {
									e.setState({ selectedOption: t }, function () {
										return console.log(
											"Option selected:",
											e.state.selectedOption
										);
									}),
										e.props.getAutomationTaskByOperation(
											e.state.projectIdentifier,
											t.value
										),
										localStorage.setItem("selectedOption", JSON.stringify(t));
								}),
								(e.state = {
									errors: {},
									projectIdentifier: "",
									selectedOption: {},
									all_operations: {},
									count: 25,
								}),
								(e.handleStartRefresh = e.handleStartRefresh.bind(
									Object(L.a)(e)
								)),
								e
							);
						}
						return (
							Object(p.a)(t, e),
							Object(l.a)(
								t,
								[
									{
										key: "handleStartRefresh",
										value: function () {
											var e = this;
											null != this.state.selectedOption &&
												(this.intervalLoop = setInterval(function () {
													return e.setState(function (t) {
														e.props.getAutomationTaskByOperation(
															e.state.projectIdentifier,
															e.state.selectedOption.value
														),
															console.log(
																"Refreshing Task for: " +
																	e.state.selectedOption.value
															);
													});
												}, 2e3));
										},
									},
									{
										key: "componentWillUnmount",
										value: function () {
											clearInterval(this.intervalLoop);
										},
									},
									{
										key: "onReloadDataClick",
										value: function (e, t) {
											this.props.getAutomationTaskByOperation(e, t);
										},
									},
									{
										key: "componentDidMount",
										value: function () {
											var e = this.props.match.params.id;
											this.setState({ projectIdentifier: e }),
												this.props.getAllOperationByBackLog(e);
										},
									},
									{
										key: "render",
										value: function () {
											var e,
												t = this.props.match.params.id,
												a = this.props.backlog,
												n = a.automation_tasks,
												r = a.all_operations,
												s = this.state.errors,
												i = function (e, t) {
													return t.length < 1
														? e.projectNotFound
															? o.a.createElement(
																	"div",
																	{ className: "container" },
																	o.a.createElement(
																		"div",
																		{ className: "row" },
																		o.a.createElement(
																			"div",
																			{ className: "col-md-12" },
																			o.a.createElement(
																				"div",
																				{
																					className:
																						"alert alert-danger text-center",
																					role: "alert",
																				},
																				e.projectNotFound
																			)
																		)
																	)
															  )
															: e.projectIdentifier
															? o.a.createElement(
																	"div",
																	{ className: "container" },
																	o.a.createElement(
																		"div",
																		{ className: "row" },
																		o.a.createElement(
																			"div",
																			{ className: "col-md-12" },
																			o.a.createElement(
																				"div",
																				{
																					className:
																						"alert alert-danger text-center",
																					role: "alert",
																				},
																				e.projectIdentifier
																			)
																		)
																	)
															  )
															: o.a.createElement(
																	"div",
																	{ className: "container" },
																	o.a.createElement(
																		"div",
																		{ className: "row" },
																		o.a.createElement(
																			"div",
																			{ className: "col-md-12" },
																			o.a.createElement(
																				"div",
																				{
																					className:
																						"alert alert-info text-center",
																					role: "alert",
																				},
																				"No Automation Tasks on this board"
																			)
																		)
																	)
															  )
														: o.a.createElement(qt, {
																automation_tasks_prop: n,
														  });
												};
											i(s, n);
											for (var c = [], l = 0; l < n.length; l++) c.push(n[l]);
											return (
												(e = i(s, n)),
												o.a.createElement(
													o.a.Fragment,
													null,
													o.a.createElement(
														"div",
														{ className: "container" },
														o.a.createElement(
															"div",
															{ className: "row" },
															o.a.createElement(
																"div",
																{ className: "col-md-4" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/addAutomationTask/".concat(t),
																		className: "btn btn-primary mb-3",
																	},
																	o.a.createElement(
																		"i",
																		{ className: "fas fa-plus-circle" },
																		" Create Automation Task"
																	)
																)
															),
															o.a.createElement(
																"div",
																{ className: "col-md-4" },
																o.a.createElement(
																	d.b,
																	{
																		to: "/automationBoard/".concat(t),
																		className: "btn btn-info",
																	},
																	o.a.createElement(
																		"i",
																		{ className: "fas fa-plus-circle" },
																		" Automation Board "
																	)
																)
															)
														),
														o.a.createElement("br", null),
														o.a.createElement("hr", null),
														o.a.createElement(
															"h1",
															{ id: "title" },
															n.length > 0 && n[0].projectIdentifier
														),
														o.a.createElement("hr", null),
														n.length > 0 &&
															o.a.createElement(
																o.a.Fragment,
																null,
																o.a.createElement(
																	"div",
																	{ id: "operation" },
																	"Operation Selected:"
																),
																o.a.createElement(
																	"div",
																	{ id: "operation" },
																	o.a.createElement(
																		"button",
																		{
																			type: "button",
																			className: "btn btn-outline-primary",
																			onClick: this.onReloadDataClick.bind(
																				this,
																				n[0].projectIdentifier,
																				n[0].operationName
																			),
																		},
																		Object(xt.a)(n[0].operationName)
																	)
																)
															),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"h6",
																null,
																"Operation / Resource :"
															),
															o.a.createElement(St.a, {
																value: this.state.selectedOption,
																onChange: this.handleChange,
																options: r,
																clearable: !0,
															}),
															s.selectedOption &&
																o.a.createElement(
																	"div",
																	{
																		style: {
																			width: "100%",
																			marginTop: ".25rem",
																			fontSize: "80%",
																			color: "#dc3545",
																		},
																	},
																	s.selectedOption
																)
														)
													),
													e
												)
											);
										},
									},
								],
								[
									{
										key: "getDerivedStateFromProps",
										value: function (e, t) {
											var a = JSON.parse(
												localStorage.getItem("selectedOption")
											);
											return {
												errors: e.errors,
												projectIdentifier: t.projectIdentifier,
												selectedOption:
													a !== t.selectedOption ? a : t.selectedOption,
												all_operations:
													e.backlog.all_operations !== t.all_operations
														? e.backlog.all_operations
														: t.all_operations,
											};
										},
									},
								]
							),
							t
						);
					})(r.Component)),
				Wt = Object(h.b)(
					function (e) {
						return { backlog: e.backlog, errors: e.errors };
					},
					{ getAllOperationByBackLog: ie, getAutomationTaskByOperation: ce }
				)(Gt),
				Yt = (function (e) {
					function t(e) {
						var a;
						Object(c.a)(this, t);
						var n = (a = Object(m.a)(this, Object(u.a)(t).call(this, e))).props
							.match.params.id;
						return (
							(a.state = {
								summary: "",
								acceptanceCriteria: "",
								status: "",
								priority: 0,
								dueDate: "",
								projectIdentifier: n,
								errors: {},
							}),
							(a.onChange = a.onChange.bind(Object(L.a)(a))),
							(a.onSubmit = a.onSubmit.bind(Object(L.a)(a))),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										summary: this.state.summary,
										acceptanceCriteria: this.state.acceptanceCriteria,
										status: this.state.status,
										priority: this.state.priority,
										dueDate: this.state.dueDate,
									};
									this.props.addAutomationTask(
										this.state.projectIdentifier,
										t,
										this.props.history
									);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.props.match.params.id,
										t = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/automationBoard/".concat(e),
															className: "btn btn-light",
														},
														"Back to Automation Board"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														"Add Automation Task"
													),
													o.a.createElement(
														"p",
														{ className: "lead text-center" },
														"Project Identifier: ",
														this.state.projectIdentifier,
														" "
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": t.summary,
																}),
																name: "summary",
																placeholder: "Automation Task summary",
																value: this.state.summary,
																onChange: this.onChange,
															}),
															t.summary &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	t.summary
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																className: "form-control form-control-lg",
																placeholder: "Acceptance Criteria",
																name: "acceptanceCriteria",
																value: this.state.acceptanceCriteria,
																onChange: this.onChange,
															})
														),
														o.a.createElement("h6", null, "Due Date"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "date",
																className: "form-control form-control-lg",
																name: "dueDate",
																value: this.state.dueDate,
																onChange: this.onChange,
															})
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "priority",
																	value: this.state.priority,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: 0 },
																	"Select Priority"
																),
																o.a.createElement(
																	"option",
																	{ value: 1 },
																	"High"
																),
																o.a.createElement(
																	"option",
																	{ value: 2 },
																	"Medium"
																),
																o.a.createElement("option", { value: 3 }, "Low")
															)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "status",
																	value: this.state.status,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: "" },
																	"Select Status"
																),
																o.a.createElement(
																	"option",
																	{ value: "IN_HOLD" },
																	"IN HOLD"
																),
																o.a.createElement(
																	"option",
																	{ value: "FAILLED" },
																	"FAILLED"
																),
																o.a.createElement(
																	"option",
																	{ value: "SUCCESS" },
																	"SUCCESS"
																)
															)
														),
														o.a.createElement("input", {
															type: "submit",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				zt = Object(h.b)(
					function (e) {
						return { errors: e.errors };
					},
					{
						addAutomationTask: function (e, t, a) {
							return (function () {
								var n = Object(E.a)(
									v.a.mark(function n(r) {
										return v.a.wrap(
											function (n) {
												for (;;)
													switch ((n.prev = n.next)) {
														case 0:
															return (
																(n.prev = 0),
																(n.next = 3),
																b.a.post(
																	"/api/backlog/automationTask/".concat(e),
																	t
																)
															);
														case 3:
															a.push("/automationBoard/".concat(e)),
																r({ type: y, payload: {} }),
																(n.next = 10);
															break;
														case 7:
															(n.prev = 7),
																(n.t0 = n.catch(0)),
																r({ type: y, payload: n.t0.response.data });
														case 10:
														case "end":
															return n.stop();
													}
											},
											n,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return n.apply(this, arguments);
								};
							})();
						},
					}
				)(Yt),
				Ht = (function (e) {
					function t() {
						var e;
						return (
							Object(c.a)(this, t),
							((e = Object(m.a)(this, Object(u.a)(t).call(this))).state = {
								id: "",
								projectSequence: "",
								summary: "",
								acceptanceCriteria: "",
								status: "",
								priority: "",
								dueDate: "",
								projectIdentifier: "",
								create_At: "",
								errors: {},
							}),
							(e.onChange = e.onChange.bind(Object(L.a)(e))),
							(e.onSubmit = e.onSubmit.bind(Object(L.a)(e))),
							e
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "componentDidMount",
								value: function () {
									var e = this.props.match.params,
										t = e.backlog_id,
										a = e.pt_id;
									this.props.getAutomationTask(t, a, this.props.history);
								},
							},
							{
								key: "componentWillReceiveProps",
								value: function (e) {
									e.errors && this.setState({ errors: e.errors });
									var t = e.automation_task,
										a = t.id,
										n = t.projectSequence,
										r = t.summary,
										o = t.acceptanceCriteria,
										s = t.status,
										i = t.priority,
										c = t.dueDate,
										l = t.projectIdentifier,
										m = t.create_At;
									this.setState({
										id: a,
										projectSequence: n,
										summary: r,
										acceptanceCriteria: o,
										status: s,
										priority: i,
										dueDate: c,
										projectIdentifier: l,
										create_At: m,
									});
								},
							},
							{
								key: "onChange",
								value: function (e) {
									this.setState(Object(B.a)({}, e.target.name, e.target.value));
								},
							},
							{
								key: "onSubmit",
								value: function (e) {
									e.preventDefault();
									var t = {
										id: this.state.id,
										projectSequence: this.state.projectSequence,
										summary: this.state.summary,
										acceptanceCriteria: this.state.acceptanceCriteria,
										status: this.state.status,
										priority: this.state.priority,
										dueDate: this.state.dueDate,
										projectIdentifier: this.state.projectIdentifier,
										create_At: this.state.create_At,
									};
									this.props.updateAutomationTask(
										this.state.projectIdentifier,
										this.state.projectSequence,
										t,
										this.props.history
									);
								},
							},
							{
								key: "render",
								value: function () {
									var e = this.state.errors;
									return o.a.createElement(
										"div",
										{ className: "add-PBI" },
										o.a.createElement(
											"div",
											{ className: "container" },
											o.a.createElement(
												"div",
												{ className: "row" },
												o.a.createElement(
													"div",
													{ className: "col-md-8 m-auto" },
													o.a.createElement(
														d.b,
														{
															to: "/automationBoard/".concat(
																this.state.projectIdentifier
															),
															className: "btn btn-light",
														},
														"Back to Automation Board"
													),
													o.a.createElement(
														"h4",
														{ className: "display-4 text-center" },
														"Update Automation Task"
													),
													o.a.createElement(
														"p",
														{ className: "lead text-center" },
														"Project Name: ",
														this.state.projectIdentifier,
														" | Automation Task ID:",
														" ",
														this.state.projectSequence,
														" "
													),
													o.a.createElement(
														"form",
														{ onSubmit: this.onSubmit },
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "text",
																className: M()("form-control form-control-lg", {
																	"is-invalid": e.summary,
																}),
																name: "summary",
																placeholder: "Automation Task summary",
																value: this.state.summary,
																onChange: this.onChange,
															}),
															e.summary &&
																o.a.createElement(
																	"div",
																	{ className: "invalid-feedback" },
																	e.summary
																)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("textarea", {
																className: "form-control form-control-lg",
																placeholder: "Acceptance Criteria",
																name: "acceptanceCriteria",
																value: this.state.acceptanceCriteria,
																onChange: this.onChange,
															})
														),
														o.a.createElement("h6", null, "Due Date"),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement("input", {
																type: "date",
																className: "form-control form-control-lg",
																name: "dueDate",
																value: this.state.dueDate,
																onChange: this.onChange,
															})
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "priority",
																	value: this.state.priority,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: 0 },
																	"Select Priority"
																),
																o.a.createElement(
																	"option",
																	{ value: 1 },
																	"High"
																),
																o.a.createElement(
																	"option",
																	{ value: 2 },
																	"Medium"
																),
																o.a.createElement("option", { value: 3 }, "Low")
															)
														),
														o.a.createElement(
															"div",
															{ className: "form-group" },
															o.a.createElement(
																"select",
																{
																	className: "form-control form-control-lg",
																	name: "status",
																	value: this.state.status,
																	onChange: this.onChange,
																},
																o.a.createElement(
																	"option",
																	{ value: "" },
																	"Select Status"
																),
																o.a.createElement(
																	"option",
																	{ value: "IN_HOLD" },
																	"IN HOLD"
																),
																o.a.createElement(
																	"option",
																	{ value: "FAILLED" },
																	"FAILLED"
																),
																o.a.createElement(
																	"option",
																	{ value: "SUCCESS" },
																	"SUCCESS"
																)
															)
														),
														o.a.createElement("input", {
															type: "submit",
															className: "btn btn-primary btn-block mt-4",
														})
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.Component),
				Jt = Object(h.b)(
					function (e) {
						return {
							automation_task: e.backlog.automation_task,
							errors: e.errors,
						};
					},
					{
						getAutomationTask: function (e, t, a) {
							return (function () {
								var n = Object(E.a)(
									v.a.mark(function n(r) {
										var o;
										return v.a.wrap(
											function (n) {
												for (;;)
													switch ((n.prev = n.next)) {
														case 0:
															return (
																(n.prev = 0),
																(n.next = 3),
																b.a.get(
																	"/api/backlog/automationTask/"
																		.concat(e, "/")
																		.concat(t)
																)
															);
														case 3:
															(o = n.sent),
																r({
																	type: "GET_AUTOMATION_TASK",
																	payload: o.data,
																}),
																(n.next = 10);
															break;
														case 7:
															(n.prev = 7),
																(n.t0 = n.catch(0)),
																a.push("/dashboard");
														case 10:
														case "end":
															return n.stop();
													}
											},
											n,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return n.apply(this, arguments);
								};
							})();
						},
						updateAutomationTask: function (e, t, a, n) {
							return (function () {
								var r = Object(E.a)(
									v.a.mark(function r(o) {
										return v.a.wrap(
											function (r) {
												for (;;)
													switch ((r.prev = r.next)) {
														case 0:
															return (
																(r.prev = 0),
																(r.next = 3),
																b.a.patch(
																	"/api/backlog/automationTask/"
																		.concat(e, "/")
																		.concat(t),
																	a
																)
															);
														case 3:
															n.push("/automationBoard/".concat(e)),
																o({ type: y, payload: {} }),
																(r.next = 10);
															break;
														case 7:
															(r.prev = 7),
																(r.t0 = r.catch(0)),
																o({ type: y, payload: r.t0.response.data });
														case 10:
														case "end":
															return r.stop();
													}
											},
											r,
											null,
											[[0, 7]]
										);
									})
								);
								return function (e) {
									return r.apply(this, arguments);
								};
							})();
						},
					}
				)(Ht),
				Kt = a(25),
				Vt = a(144),
				Xt = a.n(Vt),
				Qt = a(145),
				$t = a.n(Qt),
				Zt =
					(a(311),
					function (e) {
						var t = e.location,
							a = Object(r.useState)(""),
							s = Object(Kt.a)(a, 2),
							i = s[0],
							c = s[1],
							l = Object(r.useState)(""),
							m = Object(Kt.a)(l, 2),
							u = m[0],
							p = m[1],
							d = Object(r.useState)(""),
							h = Object(Kt.a)(d, 2),
							f = (h[0], h[1]),
							v = Object(r.useState)(""),
							E = Object(Kt.a)(v, 2),
							g = (E[0], E[1], Object(r.useState)([])),
							b = Object(Kt.a)(g, 2),
							y = b[0],
							k = b[1],
							N = "https://project-chat-application.herokuapp.com/";
						Object(r.useEffect)(
							function () {
								var e = Xt.a.parse(t.search);
								console.log(t.search),
									console.log(e),
									(n = $t()(N)),
									p(u),
									c(i),
									n.emit("join", { name: i, room: u }, function (e) {
										e && alert(e);
									});
							},
							[N, t.search]
						),
							Object(r.useEffect)(
								function () {
									return (
										n.on("message", function (e) {
											k([].concat(Object(rt.a)(y), [e]));
										}),
										n.on("roomData", function (e) {
											var t = e.users;
											f(t);
										}),
										function () {
											n.emit("disconnect"), n.off();
										}
									);
								},
								[y]
							);
						return o.a.createElement("div", null, "Chat");
					}),
				ea =
					(a(312),
					Object(h.b)(function (e) {
						return { quote: e.quote };
					})(function (e) {
						var t = Object(r.useState)(""),
							a = Object(Kt.a)(t, 2),
							n = a[0],
							s = a[1],
							i = Object(r.useState)(""),
							c = Object(Kt.a)(i, 2),
							l = c[0],
							m = c[1];
						return (
							Object(r.useEffect)(function () {
								var t = setTimeout(function () {
									return e.dispatch({ type: "CHANGE_QUOTE" });
								}, 5e3);
								return function () {
									return clearTimeout(t);
								};
							}),
							o.a.createElement(
								"div",
								{ className: "joinOuterContainer" },
								o.a.createElement(
									"div",
									{ className: "joinInnerContainer" },
									o.a.createElement("h1", { className: "heading" }, "Join"),
									o.a.createElement(
										"div",
										null,
										o.a.createElement("input", {
											placeholder: "Name",
											className: "joinInput",
											type: "text",
											onChange: function (e) {
												return s(e.target.value);
											},
										})
									),
									o.a.createElement(
										"div",
										null,
										o.a.createElement("input", {
											placeholder: "Room",
											className: "joinInput mt-20",
											type: "text",
											onChange: function (e) {
												return m(e.target.value);
											},
										})
									),
									o.a.createElement(
										d.b,
										{
											onClick: function (e) {
												return n && l ? null : e.preventDefault();
											},
											to: "/chat?name=".concat(n, "&room=").concat(l),
										},
										o.a.createElement(
											"button",
											{ className: "button mt-20", type: "submit" },
											"Sign In"
										)
									)
								)
							)
						);
					})),
				ta = function () {
					var e = Object(r.useState)(0),
						t = Object(Kt.a)(e, 2),
						a = t[0],
						n = t[1],
						s = Object(r.useState)(!1),
						i = Object(Kt.a)(s, 2),
						c = i[0],
						l = i[1];
					return (
						Object(r.useEffect)(
							function () {
								var e = null;
								return (
									c
										? (e = setInterval(function () {
												n(function (e) {
													return e + 1;
												});
										  }, 1e3))
										: c || 0 === a || clearInterval(e),
									function () {
										return clearInterval(e);
									}
								);
							},
							[c, a]
						),
						o.a.createElement(
							"div",
							{ className: "app" },
							o.a.createElement("div", { className: "time" }, a, "s"),
							o.a.createElement(
								"div",
								{ className: "row" },
								o.a.createElement(
									"button",
									{
										className: "button button-primary button-primary-".concat(
											c ? "active" : "inactive"
										),
										onClick: function () {
											l(!c);
										},
									},
									c ? "Pause" : "Start"
								),
								o.a.createElement(
									"button",
									{
										className: "button",
										onClick: function () {
											n(0), l(!1);
										},
									},
									"Reset"
								)
							)
						)
					);
				};
			function aa() {
				return o.a.createElement("p", { id: "break-label" }, " Break Length ");
			}
			function na() {
				return o.a.createElement(
					"p",
					{ id: "session-label" },
					" Session Length "
				);
			}
			var ra = (function (e) {
					function t(e) {
						var a;
						return (
							Object(c.a)(this, t),
							((a = Object(m.a)(this, Object(u.a)(t).call(this, e))).state = {
								break: 5,
								session: 25,
								count: 25,
							}),
							(a.handleClickBreakDecrement = a.handleClickBreakDecrement.bind(
								Object(L.a)(a)
							)),
							(a.handleClickBreakIncrement = a.handleClickBreakIncrement.bind(
								Object(L.a)(a)
							)),
							(a.handleClickSessionDecrement = a.handleClickSessionDecrement.bind(
								Object(L.a)(a)
							)),
							(a.handleClickSessionIncrement = a.handleClickSessionIncrement.bind(
								Object(L.a)(a)
							)),
							(a.handleStartStop = a.handleStartStop.bind(Object(L.a)(a))),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: "handleClickBreakDecrement",
								value: function () {
									this.setState({ break: this.state.break - 1 });
								},
							},
							{
								key: "handleClickSessionDecrement",
								value: function () {
									this.setState({
										session: this.state.session - 1,
										count: this.state.count - 1,
									});
								},
							},
							{
								key: "handleClickBreakIncrement",
								value: function () {
									this.setState({ break: this.state.break + 1 });
								},
							},
							{
								key: "handleClickSessionIncrement",
								value: function () {
									this.setState({
										session: this.state.session + 1,
										count: this.state.count + 1,
									});
								},
							},
							{
								key: "handleStartStop",
								value: function () {
									var e = this;
									this.timer = setInterval(function () {
										return e.setState(function (e) {
											return 0 === e.count ? null : { count: e.count - 1 };
										});
									}, 1e3);
								},
							},
							{ key: "handleReset", value: function () {} },
							{
								key: "render",
								value: function () {
									var e;
									return (
										this.state.count % 60 >= 10 &&
											(e =
												Math.floor(this.state.count / 60) +
												":" +
												(this.state.count % 60)),
										o.a.createElement(
											"div",
											null,
											o.a.createElement(
												"div",
												{ className: "breakContainer" },
												o.a.createElement(aa, null),
												o.a.createElement(
													"div",
													{ className: "breakButton" },
													o.a.createElement(
														"button",
														{
															id: "break-decrement",
															onClick: this.handleClickBreakDecrement,
														},
														"handleClickBreakDecrement"
													),
													o.a.createElement(
														"p",
														{ id: "break-length" },
														" ",
														this.state.break,
														" "
													),
													o.a.createElement(
														"button",
														{
															id: "break-increment",
															onClick: this.handleClickBreakIncrement,
														},
														"           handleClickBreakIncrement"
													)
												)
											),
											o.a.createElement(
												"div",
												{ className: "sessionContainer" },
												o.a.createElement(na, null),
												o.a.createElement(
													"div",
													{ className: "sessionButton" },
													o.a.createElement(
														"button",
														{
															id: "session-decrement",
															onClick: this.handleClickSessionDecrement,
														},
														"handleClickSessionDecrement"
													),
													o.a.createElement(
														"p",
														{ id: "session-length" },
														" ",
														this.state.session,
														" "
													),
													o.a.createElement(
														"button",
														{
															id: "session-increment",
															onClick: this.handleClickSessionIncrement,
														},
														"handleClickSessionIncrement"
													)
												)
											),
											o.a.createElement(
												"div",
												null,
												o.a.createElement(
													"p",
													{ id: "timer-label" },
													" Session"
												),
												o.a.createElement("p", { id: "time-left" }, e)
											),
											o.a.createElement(
												"div",
												null,
												o.a.createElement(
													"button",
													{ id: "start_stop", onClick: this.handleStartStop },
													"Start/Stop"
												),
												o.a.createElement(
													"button",
													{ id: "reset", onClick: this.handleReset },
													"Reset"
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(o.a.Component),
				oa = a(19),
				sa = a.n(oa),
				ia =
					(a(313),
					(function (e) {
						function t() {
							var e, a;
							Object(c.a)(this, t);
							for (
								var n = arguments.length, r = new Array(n), o = 0;
								o < n;
								o++
							)
								r[o] = arguments[o];
							return (
								((a = Object(m.a)(
									this,
									(e = Object(u.a)(t)).call.apply(e, [this].concat(r))
								)).state = {
									activeDrags: 0,
									deltaPosition: { x: 0, y: 0 },
									controlledPosition: { x: -400, y: 200 },
								}),
								(a.handleDrag = function (e, t) {
									var n = a.state.deltaPosition,
										r = n.x,
										o = n.y;
									a.setState({
										deltaPosition: { x: r + t.deltaX, y: o + t.deltaY },
									});
								}),
								(a.onStart = function () {
									a.setState({ activeDrags: ++a.state.activeDrags });
								}),
								(a.onStop = function () {
									a.setState({ activeDrags: --a.state.activeDrags });
								}),
								(a.adjustXPos = function (e) {
									e.preventDefault(), e.stopPropagation();
									var t = a.state.controlledPosition,
										n = t.x,
										r = t.y;
									a.setState({ controlledPosition: { x: n - 10, y: r } });
								}),
								(a.adjustYPos = function (e) {
									e.preventDefault(), e.stopPropagation();
									var t = a.state.controlledPosition,
										n = t.x,
										r = t.y;
									a.setState({ controlledPosition: { x: n, y: r - 10 } });
								}),
								(a.onControlledDrag = function (e, t) {
									var n = t.x,
										r = t.y;
									a.setState({ controlledPosition: { x: n, y: r } });
								}),
								(a.onControlledDragStop = function (e, t) {
									a.onControlledDrag(e, t), a.onStop();
								}),
								a
							);
						}
						return (
							Object(p.a)(t, e),
							Object(l.a)(t, [
								{
									key: "render",
									value: function () {
										var e = { onStart: this.onStart, onStop: this.onStop },
											t = this.state,
											a = t.deltaPosition,
											n = t.controlledPosition;
										return o.a.createElement(
											"div",
											null,
											o.a.createElement("h1", null, "React Draggable"),
											o.a.createElement(
												"p",
												null,
												"Active DragHandlers: ",
												this.state.activeDrags
											),
											o.a.createElement(
												"p",
												null,
												o.a.createElement(
													"a",
													{
														href:
															"https://github.com/mzabriskie/react-draggable/blob/master/example/index.html",
													},
													"Demo Source"
												)
											),
											o.a.createElement(
												sa.a,
												e,
												o.a.createElement(
													"div",
													{ className: "box" },
													"I can be dragged anywhere"
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ axis: "x" }, e),
												o.a.createElement(
													"div",
													{ className: "box cursor-x" },
													"I can only be dragged horizonally (x axis)"
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ axis: "y" }, e),
												o.a.createElement(
													"div",
													{ className: "box cursor-y" },
													"I can only be dragged vertically (y axis)"
												)
											),
											o.a.createElement(
												sa.a,
												{
													onStart: function () {
														return !1;
													},
												},
												o.a.createElement(
													"div",
													{ className: "box" },
													"I don't want to be dragged"
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ onDrag: this.handleDrag }, e),
												o.a.createElement(
													"div",
													{ className: "box" },
													o.a.createElement("div", null, "I track my deltas"),
													o.a.createElement(
														"div",
														null,
														"x: ",
														a.x.toFixed(0),
														", y: ",
														a.y.toFixed(0)
													)
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ handle: "strong" }, e),
												o.a.createElement(
													"div",
													{ className: "box no-cursor" },
													o.a.createElement(
														"strong",
														{ className: "cursor" },
														o.a.createElement("div", null, "Drag here")
													),
													o.a.createElement(
														"div",
														null,
														"You must click my handle to drag me"
													)
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ cancel: "strong" }, e),
												o.a.createElement(
													"div",
													{ className: "box" },
													o.a.createElement(
														"strong",
														{ className: "no-cursor" },
														"Can't drag here"
													),
													o.a.createElement("div", null, "Dragging here works")
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ grid: [25, 25] }, e),
												o.a.createElement(
													"div",
													{ className: "box" },
													"I snap to a 25 x 25 grid"
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ grid: [50, 50] }, e),
												o.a.createElement(
													"div",
													{ className: "box" },
													"I snap to a 50 x 50 grid"
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign(
													{
														bounds: {
															top: -100,
															left: -100,
															right: 100,
															bottom: 100,
														},
													},
													e
												),
												o.a.createElement(
													"div",
													{ className: "box" },
													"I can only be moved 100px in any direction."
												)
											),
											o.a.createElement(
												"div",
												{
													className: "box",
													style: {
														height: "500px",
														width: "500px",
														position: "relative",
														overflow: "auto",
														padding: "0",
													},
												},
												o.a.createElement(
													"div",
													{
														style: {
															height: "1000px",
															width: "1000px",
															padding: "10px",
														},
													},
													o.a.createElement(
														sa.a,
														Object.assign({ bounds: "parent" }, e),
														o.a.createElement(
															"div",
															{ className: "box" },
															"I can only be moved within my offsetParent.",
															o.a.createElement("br", null),
															o.a.createElement("br", null),
															"Both parent padding and child margin work properly."
														)
													),
													o.a.createElement(
														sa.a,
														Object.assign({ bounds: "parent" }, e),
														o.a.createElement(
															"div",
															{ className: "box" },
															"I also can only be moved within my offsetParent.",
															o.a.createElement("br", null),
															o.a.createElement("br", null),
															"Both parent padding and child margin work properly."
														)
													)
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ bounds: "body" }, e),
												o.a.createElement(
													"div",
													{ className: "box" },
													"I can only be moved within the confines of the body element."
												)
											),
											o.a.createElement(
												sa.a,
												e,
												o.a.createElement(
													"div",
													{
														className: "box",
														style: {
															position: "absolute",
															bottom: "100px",
															right: "100px",
														},
													},
													"I already have an absolute position."
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ defaultPosition: { x: 25, y: 25 } }, e),
												o.a.createElement(
													"div",
													{ className: "box" },
													"I have a default position of {x: 25, y: 25}, so I'm slightly offset."
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign(
													{ positionOffset: { x: "-10%", y: "-10%" } },
													e
												),
												o.a.createElement(
													"div",
													{ className: "box" },
													"I have a default position based on percents {x: '-10%', y: '-10%'}, so I'm slightly offset."
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ position: n }, e, {
													onDrag: this.onControlledDrag,
												}),
												o.a.createElement(
													"div",
													{ className: "box" },
													"My position can be changed programmatically. ",
													o.a.createElement("br", null),
													"I have a drag handler to sync state.",
													o.a.createElement(
														"p",
														null,
														o.a.createElement(
															"a",
															{ href: "#", onClick: this.adjustXPos },
															"Adjust x (",
															n.x,
															")"
														)
													),
													o.a.createElement(
														"p",
														null,
														o.a.createElement(
															"a",
															{ href: "#", onClick: this.adjustYPos },
															"Adjust y (",
															n.y,
															")"
														)
													)
												)
											),
											o.a.createElement(
												sa.a,
												Object.assign({ position: n }, e, {
													onStop: this.onControlledDragStop,
												}),
												o.a.createElement(
													"div",
													{ className: "box" },
													"My position can be changed programmatically. ",
													o.a.createElement("br", null),
													"I have a dragStop handler to sync state.",
													o.a.createElement(
														"p",
														null,
														o.a.createElement(
															"a",
															{ href: "#", onClick: this.adjustXPos },
															"Adjust x (",
															n.x,
															")"
														)
													),
													o.a.createElement(
														"p",
														null,
														o.a.createElement(
															"a",
															{ href: "#", onClick: this.adjustYPos },
															"Adjust y (",
															n.y,
															")"
														)
													)
												)
											)
										);
									},
								},
							]),
							t
						);
					})(r.Component)),
				ca = localStorage.jwtToken,
				la = localStorage.jwtTokenCandidate;
			if (
				(ca && "undefined" !== typeof ca && x(ca),
				la && "undefined" !== typeof la && T(la),
				"undefined" !== typeof ca || "undefined" !== typeof la)
			) {
				var ma = ca || la,
					ua = P()(ma);
				ca && re.dispatch({ type: "SET_CURRENT_USER", payload: ua });
				var pa = Date.now() / 1e3;
				ua.exp < pa && (re.dispatch(I()), (window.location.href = "/"));
			}
			var da = (function (e) {
				function t() {
					return (
						Object(c.a)(this, t),
						Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
					);
				}
				return (
					Object(p.a)(t, e),
					Object(l.a)(t, [
						{
							key: "render",
							value: function () {
								return o.a.createElement(
									h.a,
									{ store: re },
									o.a.createElement(
										d.a,
										null,
										o.a.createElement(
											"div",
											{ className: "App" },
											o.a.createElement(A, null),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/chat",
												component: Zt,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/joinChat",
												component: ea,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/draggable",
												component: ia,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/timer",
												component: ta,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/pomodoro",
												component: ra,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/",
												component: be,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/infoPage/:id",
												component: ft,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/register",
												component: ke,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/login",
												component: je,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/editcv/:id",
												component: Ve,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/addProfileTask/:id/:taskType",
												component: mt,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path:
													"/updateProfileTask/:profile_backlog_id/:pt_id/:taskType",
												component: pt,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/automationBoard/:id",
												component: wt,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/automationGridBoard/:id",
												component: Wt,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/addAutomationTask/:id",
												component: zt,
											}),
											o.a.createElement(R.b, {
												exact: !0,
												path: "/updateAutomationTask/:backlog_id/:pt_id",
												component: Jt,
											}),
											o.a.createElement(
												R.d,
												null,
												o.a.createElement(Ce, {
													exact: !0,
													path: "/dashboard",
													component: S,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/addProject",
													component: G,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/profiles",
													component: Pe,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/addProfile",
													component: Ie,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/home",
													component: dt,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/updateProfile/:id",
													component: Ae,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/updateProject/:id",
													component: se,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/projectBoard/:id",
													component: de,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/addProjectTask/:id",
													component: fe,
												}),
												o.a.createElement(Ce, {
													exact: !0,
													path: "/updateProjectTask/:backlog_id/:pt_id",
													component: Ee,
												})
											)
										)
									)
								);
							},
						},
					]),
					t
				);
			})(r.Component);
			i.a.render(o.a.createElement(da, null), document.getElementById("root"));
		},
	},
	[[147, 1, 2]],
]);
//# sourceMappingURL=main.033025fd.chunk.js.map
