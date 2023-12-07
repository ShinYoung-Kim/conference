import { defineConfig } from "wmr";

export default defineConfig({
	// 컴파일할 파일의 경로
	root: "./",
	// 빌드된 파일의 출력 경로
	outDir: "./dist",
	// 빌드할 파일의 확장자
	build: {
		target: "es2022",
		extensions: [".js", ".ts", ".vue"],
	},
});
