# Makefile

install:
	npm install

start calc:
	npx babel-node src/bin/brain-calc.js

start even:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run

make lint:
	npx eslint src
