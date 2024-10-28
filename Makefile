install:
	pnpm install --frozen-lockfile

nest-generate-resource:
	nest g res ${name} --no-spec