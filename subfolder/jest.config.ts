module.exports = {
	"testEnvironment": "node",
	"transform": {
		"^.+\\.(ts)$": "ts-jest"
	},
	"roots": [
		"<rootDir>/src/"
	],
	"testPathIgnorePatterns": [
		"/node_modules/",
		"/lib/"
	],
	"watchPathIgnorePatterns": [
		"<rootDir>/node_modules/"
	]
};
