# Truth-Eliminability-Sorting-Algorithm

For: ***Classical Extensions of Kripke-Feferman: Constraint Satisfaction and Alethic Paradox***

> https://www.thoughtscript.io/papers/000000000013

> Mirrored: https://thoughtscript-io.onrender.com/papers/000000000013.html

## Definitions

Formal definitions.

> Consult **Section 3.2** for an overview of **Truth as a Metalinguistic Predicate**.

### Sentences Names, Name-Forming Operators, and Diagonalization

Here and below I’ll use the convention `⟨`,`⟩` to denote the familiar **Gödel Numbering** technique:

1. **Sentence Name** - the **Name** of a **Sentence** (e.g. - a **Variable Name** in Computer Science) `P` for a **Sentence** `S` shall be written: `P := S`.
2. **Name-Forming Operator** - `⟨S⟩` represents the mapping of some **Sentence**, **Proposition**, or **Expression** `S` to it’s **Name**. `⟨S⟩ ≡ P := S` returning `P`.
3. **Diagonalization** - a **Technique** that associates the **Fixed Point** of a **Sentence** containing `S` as a sub-expression so that `S` is its own name.

> This should come as no surprise since it forms the historical and mathematical basis for Variable Naming, Memory Addressing, and Value Assignment within programming languages.

### T-Scheme

1. *Tarski’s 1933 **Definition of Truth***  - `For all x, True(x) if and only if ϕ(x)`
2. **Modern Formulation** - `T(⟨S⟩) ↔ S`
   * **CAPTURE** - conditional subrule of the **T-Scheme** biconditional. The rule going from `S` to `T(⟨S⟩)`.
   * **RELEASE** - conditional subrule of the **T-Scheme** biconditional. The rule going from `T(⟨S⟩)` to `S`.

### Truth Tellers

```
S := T(⟨S⟩)
```

1. **Truth Teller** - like the **Liar Sentence** but expressing **Truth** of itself. Constructed via **Fixed-Point Diagonalization** like the **Liar Sentence**.

### Properties of Truth and T-Schema

1. **Truth Transparency** - the principle that `S` and `T(⟨S⟩)` are always and everywhere intersubstitutable.
2. **Truth Eliminability** - (W.R.T. to **T-Scheme**) in rewriting `T(⟨S⟩)` in the lexiographical form `S` (via **Truth Transparency**) `S` *must* contain content that *doesn’t* predicate **Truth**.
   * A stronger criterion on **Truth Transparency**
   * **Truth Transparency** requires that `T(⟨S⟩)` can be rewritten in a form where no `T` appears (where **Truth** is not predicated).
3. **Truth Opacity** - when a **Sentence** `S` cannot be rewritten (via **Truth Transparency**) without a `T` appearing (where **Truth** is not predicated). Such a **Sentence** is **Truth Opaque**.

## Truth Eliminability Algorithm

A Finite, **Sorting**, Algorithm used to determine whether a **Sentence** is **Truth Opaque** or not.

## Resources and Links

1. Beall, J. A Neglected Deflationist Approach to the Liar. Analysis. 61, 126-129 (2001)
2. Beall, J. Prolegomenon to Future Revenge. Revenge Of The Liar: New Essays On The Paradox. pp. 1-30 (2007)
3. Feferman, S. Axioms for Determinateness and Truth. Review Of Symbolic Logic. 1, 204-217 (2008)
4. Kripke, S. Outline of a Theory of Truth. Journal Of Philosophy. 72, 690-716 (1975)
5. Priest, G. Doubt Truth to Be a Liar. (Oxford University Press, 2006)
6. Priest, G. Logic of Paradox. Journal Of Philosophical Logic. 8, 219-241 (1979)
7. Tarski, A. The Semantic Conception of Truth and the Foundations of Semantics. Philosophy And Phenomenological Research. 4, 341-376 (1943)




