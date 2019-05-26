# Makefile

install:
	npm install

brain-even:
	npx babel-node src/bin/brain-even.js

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-gcd:
	npx babel-node src/bin/brain-gcd.js

publish:
	npm publish --dry-run

make lint:
	npx eslint src
