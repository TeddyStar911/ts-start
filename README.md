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

> ## Component Type [CMT]
>
> #### - component.html
>
> #### - component.scss
>
> #### - component.spec.ts
>
> #### - component.ts

> ## Wrapper Type [WT]
>
> #### components CMT [ ]
>
> #### container CMT

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

> ## Store Type [ST]
>
> #### actions [Files]
>
> #### facades [Files]
>
> #### reducers [Files]
>
> #### selectors [Files]
>
> #### effects [Files]

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
> #### store ST
