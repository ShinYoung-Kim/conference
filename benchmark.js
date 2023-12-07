const { performance } = require("perf_hooks");
const webpack = require("webpack");
const { build } = require("esbuild");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpackConfig = require("./webpack.config.js");

async function measureWebpackPerformance() {
	const startTime = performance.now();

	return new Promise((resolve) => {
		webpack(webpackConfig, (err, stats) => {
			if (err || stats.hasErrors()) {
				console.error(
					err || stats.toString("errors-only")
				);
				resolve(null); // Return null on error
				return;
			}

			const endTime = performance.now();
			const elapsedTime = endTime - startTime;
			resolve(`${elapsedTime.toFixed(2)} milliseconds`); // Return elapsed time
		});
	});
}

async function measureESBuildPerformance() {
	const startTime = performance.now();

	try {
		await build({
			entryPoints: ["./src/index.js"],
			bundle: true,
			outfile: "./dist/esbuild-bundle.js",
		});

		const endTime = performance.now();
		const elapsedTime = endTime - startTime;
		return `${elapsedTime.toFixed(2)} milliseconds`;
	} catch (err) {
		console.error("Error during ESBuild:", err);
	}
}

async function measureSnowpackPerformance() {
	const startTime = performance.now();

	try {
		await build({
			entryPoints: ["./src/index.js"],
			bundle: true,
			outfile: "./dist/snowpack-bundle.js",
		});

		const endTime = performance.now();
		const elapsedTime = endTime - startTime;
		return `${elapsedTime.toFixed(2)} milliseconds`;
	} catch (err) {
		console.error("Error during Snowpack:", err);
	}
}

async function measureVitePerformance() {
	const startTime = performance.now();

	try {
		await build({
			entryPoints: ["./src/index.js"],
			bundle: true,
			outfile: "./dist/vite-bundle.js",
		});

		const endTime = performance.now();
		const elapsedTime = endTime - startTime;
		return `${elapsedTime.toFixed(2)} milliseconds`;
	} catch (err) {
		console.error("Error during Vite:", err);
	}
}

async function measureRollupPerformance() {
	const startTime = performance.now();

	try {
		await build({
			entryPoints: ["./src/index.js"],
			bundle: true,
			outfile: "./dist/rollup-bundle.js",
		});

		const endTime = performance.now();
		const elapsedTime = endTime - startTime;
		return `${elapsedTime.toFixed(2)} milliseconds`;
	} catch (err) {
		console.error("Error during Rollup:", err);
	}
}

async function measureWMRPerformance() {
	const startTime = performance.now();

	try {
		await build({
			entryPoints: ["./src/index.js"],
			bundle: true,
			outfile: "./dist/wmr-bundle.js",
		});

		const endTime = performance.now();
		const elapsedTime = endTime - startTime;
		return `${elapsedTime.toFixed(2)} milliseconds`;
	} catch (err) {
		console.error("Error during WMR:", err);
	}
}

async function measurePerformance() {
	const webpackTime = await measureWebpackPerformance();
	const esbuildTime = await measureESBuildPerformance();
	const snowpackTime = await measureSnowpackPerformance();
	const viteTime = await measureVitePerformance();
	const rollupTime = await measureRollupPerformance();
	const wmrTime = await measureWMRPerformance();

	console.log(`| JS Bundler | Time (ms) |`);
	console.log(`| ---------- | --------- |`);
	console.log(`| Webpack    | ${webpackTime} |`);
	console.log(`| ESBuild    | ${esbuildTime} |`);
	console.log(`| Snowpack   | ${snowpackTime} |`);
	console.log(`| Vite       | ${viteTime} |`);
	console.log(`| Rollup     | ${rollupTime} |`);
	console.log(`| WMR        | ${wmrTime} |`);

	console.log(webpackTime);
}

measurePerformance();
