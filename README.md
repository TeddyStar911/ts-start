# TS Start

## Set up:

```
npm i
```

## Functionality in box:

#### Store

- NGRX
- NGRX Effects
- NGRX Local Storage

#### Code Quality

- Linter
- Prettier
- Husky

#### Git Actions

- Build
- Linter
- Prettier
- Unit Tests
- Unit Tests coverage

## Architecture Concept:

> ## Module Type [MT]
>
> #### container CMT
>
> #### layout LT
>
> #### components CMT | WT [ ]
>
> #### modules MT [ ]
>
> #### pages PT [ ]
>
> #### core CT
>
> #### store ST[]

> ## Page Type [PT]
>
> #### container CMT
>
> #### components CMT | WT [ ]
>
> #### children PT [ ]
>
> #### core CT
>
> #### store ST

> ## Core Type [CT]
>
> #### types [Files]
>
> #### services [Files]
>
> #### pipes [Files]
>
> #### directives [Files]
>
> #### mocks [Files]

> ## Layout Type [LT]
>
> #### core CMT [ ]
>
> #### elements CMT | WT [ ]

> ## Wrapper Type [WT]
>
> #### components CMT [ ]
>
> #### container CMT

> ## Store Type [ST]
>
> #### actions.ts
>
> #### facades.ts
>
> #### reducers.ts
>
> #### selectors.ts
>
> #### effects.ts

> ## Component Type [CMT]
>
> #### - component.html
>
> #### - component.scss
>
> #### - component.spec.ts
>
> #### - component.ts
