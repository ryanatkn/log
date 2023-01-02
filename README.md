# @ryanatkn/log

> @ryanatkn's dev log - [log.ryanatkn.com](https://log.ryanatkn.com)

## intro

I work on open source software both professionally and as a hobby,
and I'm publicly posting almost all the code I write all day,
but most of my thinking happens in private,
hidden away from the people who may want to use my software.
By making more of my process public and interactive and open to feedback,
I hope to produce better ideas and code with likeminded people.
My blog will remain a slow moving feed that prioritizes quality,
and this repo is more of a stream of consciousness with daily notes.

## develop

> [Windows is not yet supported](https://github.com/feltcoop/gro/issues/319)
> (we recommend [WSL](https://docs.microsoft.com/en-us/windows/wsl/about))

```bash
gro dev # npm i -g @feltcoop/gro
```

See [SvelteKit](https://github.com/sveltejs/kit),
[Vite](https://github.com/vitejs/vite),
[Svelte](https://github.com/sveltejs/svelte),
[Gro](https://github.com/feltcoop/gro),
and [Felt](https://github.com/feltcoop/felt) for more.

## build

```bash
gro build
```

See [Gro's build docs](https://github.com/feltcoop/gro/blob/main/src/docs/build.md) for more.

## test

```bash
gro test
```

See [`uvu`](https://github.com/lukeed/uvu)
and [Gro's test docs](https://github.com/feltcoop/gro/blob/main/src/docs/test.md).

## deploy

[Deploy](https://github.com/feltcoop/gro/blob/main/src/docs/deploy.md)
(build, commit, and push) to the `deploy` branch, e.g. for GitHub Pages:

```bash
gro deploy
```

To configure GitHub pages (which this repo uses) or another static host,
customize or delete [src/static/CNAME](/src/static/CNAME).

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[uvu](https://github.com/lukeed/uvu) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[ESLint](https://github.com/eslint/eslint) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[Felt](https://github.com/feltcoop/felt) ∙
[@feltcoop/util](https://github.com/feltcoop/util) ∙
[Gro](https://github.com/feltcoop/gro)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)