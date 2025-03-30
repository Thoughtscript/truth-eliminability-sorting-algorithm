# Truth-Predicate-Eliminability-Sorting-Algorithm

*WIP* (*Future Thesis and/or Dissertation.*)

The original paper (2013-2014) was conferenced and referred to two of the top Logic journals in the English-speaking world (and much to my surprise!) but I declined to begin the lengthy (often 2+ years) academic publication process.

> Original draft hosted here: https://www.thoughtscript.io/papers/000000000002

For the more recent: ***Classical Extensions of Kripke-Feferman: Constraint Satisfaction and Alethic Paradox*** (summarizing key points)

> https://www.thoughtscript.io/papers/000000000013

> Mirrored: https://thoughtscript-io.onrender.com/papers/000000000013.html

## Context

There's widespread consensus that no offered solution to the **Liar Paradox** gets all of the following:
1. All the other **Alethic Paradoxes**: *Yablo-Visser*, *Liar Cycles*, *Revenge Sentences*, *Boolean Compounds*, *Curry Compounds*, *McGee Sentences*, etc.
2. No ***touted*** "philosophical (non-formal/mathematical) solution" can prove its formal correctness (**Soundness**, **Completeness**, **Consistency**, Metalogical Theorems, address **Tarski's Undefiniability Theorem**, etc.). (These are mostly what you'd find on the SEP article about the **Liar Paradox**.)
3. No formal solution can explain the big "philosophical why" (it must explain the problem) while addressing issues of formal correctness. It mustn't just be an ad-hoc trick of mathematical machinery.
4. No solution offers both a "philosophical explanation" and formal proof of its correctness.
5. Additionally, no formal solution is known to overcome all of the existing concerns: **Bacon 2015**, **Revenge Paradox**, etc.

(Optionally) Adding to the above: 

6. Is **Classical** (preserves **Bivalence** and the other **Classical** validities).

## Definitions

Formal definitions.

> Consult **Section 3.2** for an overview of **Truth as a Metalinguistic Predicate**.

### Truth Values, Truth Makers, Truth Predicates, and Axioms for Truth

*Some elementary definitions that are nevertheless useful to explicitly state and clarify here.*

1. **Truth Values** - the **Value** assigned to a  **Sentence** through a **Truth Assignment** (**Truth Interpretation**).
   * The historical tradition (in Maths and Logic, the academic fields/disciplines) follows Wittgenstein in taking **Truth Assignments** as **Functions** (**Truth Functional**) - a Mapping of **Sentences** to their respective **Truth Values**.
   * **Truth Assignments** are Mapped in two steps: **Propositional Variable Assignment** and then complex **Sentential Assignment** (via **Truth Tables**).
   * This topic has traditionally been confined to the academic fields/disciplines of Philosophy and Logic. (Are there three **Truth Values**? Two? Is Logic **Classical**?)
2. **Truth Makers** - what determines the *actual* **Truth Value** of a **Proposition**. The objective circumstances that make a Linguistic *representation* of that scenario (**Fact**), **True**.
   * An accurate (correct) **Model** faithfully depicts (*represents*) such **Truth Conditions** and **Truth Makers**. One winnows down all possible or permissible **Truth Assignments** to the correct or most accurate *representation*.
   * Properly understood, Scientists and Mathematicians uncover or discover such **Facts**. (`F = M x A`, `1 + 1 = 2`, etc.)
3. **Truth Predicates** - how we ascribe **Truth** to a **Sentence** *within* a **Language**.
   * *See below.*
4. **Axioms for Truth** - the Mathematically precise general Semantics and behavior of the word `Truth` in Natural (and Artificial) Language - e.g. it's **Inferential Properties** (for reasoning), the valid moves/language norms allowed in discourse/social activities, it's Linguistic Definition especially in consideration of the Liar Paradox. 
   * From an applied standpoint: people definitely talk about the **Liar Paradox** (Tarski's ***Semantic Conception of Truth*** is one of the most cited papers of all time).
   * How does one correctly parse, understood, or define these concepts in **Large Language Models**? In **Word Vector** notation, is the computed distance for `True(S)` and `S` within a Corpus equivalent?
   * This topic is the concern of Linguistics (the Scientific study of Language), Philosophy of Language, etc.

> This paper is concerned with the latter two topics. It is not concerned with altering  or understanding **Fact**. It seeks instead to address a long-standing problem with the **Truth Predicate** and how we are to use it in Mathematics, Logic, and other technical disciplines.

### Sentences Names, Name-Forming Operators, and Diagonalization

Here and below I’ll use the convention `⟨`,`⟩` to denote the familiar **Gödel Numbering** technique:

1. **Sentence Name** - the **Name** of a **Sentence** (e.g. - a **Variable Name** in Computer Science) `P` for a **Sentence** `S` shall be written: `P := S`.
2. **Name-Forming Operator** - `⟨S⟩` represents the mapping of some **Sentence**, **Proposition**, or **Expression** `S` to its **Name**. `⟨S⟩ ≡ P := S` returning `P`.
3. **Diagonalization** - a **Technique** that associates the **Fixed Point** of a **Sentence** containing `S` as a sub-expression so that `S` is its own name.
4. (Below, if `S` is the name of a sentence containing `S` as sub-**Expression**, both `⟨S⟩` and `S` will be used interchangeably as **Names**.)

> This should come as no surprise since it forms the historical and mathematical basis for Variable Naming, Memory Addressing, and Value Assignment within programming languages.

### T-Scheme

1. *Tarski’s 1933* **Definition of Truth**  - `For all x, True(x) if and only if ϕ(x)`.
2. **Modern Formulation** - (For all `S`) `T(⟨S⟩) ↔ S`:
   * **Capture** (or **T-Intro**) - conditional subrule of the **T-Scheme** biconditional. The rule going from `S` to `T(⟨S⟩)`.
   * **Release** - conditional subrule of the **T-Scheme** biconditional. The rule going from `T(⟨S⟩)` to `S`.

### Truth Tellers

```
S := T(⟨S⟩)
```

1. **Truth Teller** - like the **Liar Sentence** but expressing **Truth** of itself. Constructed via **Fixed-Point Diagonalization** like the **Liar Sentence**.

### Alethic Paradox

> From [Dictionary.com](https://www.dictionary.com/browse/alethic): **Alethic** "of or relating to such philosophical concepts as truth, necessity, possibility, contingency, etc".
1. **Alethic Paradox** - for any sentence `S`: The shortest proof resulting in **Contradiction** that requires the use of **T-Scheme** (**F-Schema**, or our other **Alethic** inferences including proven biconditionals involving the
**Truth Predicate**).

### Properties of Truth and T-Schema

1. **Truth Transparency** - the principle that `S` and `T(⟨S⟩)` are always and everywhere intersubstitutable.
   * *(Introductory Wikipedia article on [Referential Transparency](https://en.wikipedia.org/wiki/Referential_transparency) in Philosophy and Computer Science.)*
2. **Truth Eliminability** - (W.R.T. to **T-Scheme**) in rewriting `T(⟨S⟩)` in the lexiographical form `S` (via **Truth Transparency**) `S` *must* contain content that *doesn’t* predicate **Truth**.
   * A stronger criterion on (or reading of) **Truth Transparency** (and **T-Scheme**).
   * **Truth Transparency** requires that `T(⟨S⟩)` can be rewritten in a form where no `T` appears (where **Truth** is not *predicated*).
3. **Truth Opacity** - when a **Sentence** `S` cannot be rewritten (via **Truth Transparency**) without a `T` appearing (where **Truth** is not *predicated*). Such a **Sentence** is **Truth Opaque**.

## Truth Predicate Eliminability Algorithm and KFG

A Finite, **Sorting**, Algorithm used to determine whether a **Sentence** is **Truth Opaque** or not.

May circumvent general concerns stemming from [**Bacon 2015**](https://andrew-bacon.github.io/papers/Indeterminacy%20and%20Revenge.pdf) (my original paper was never published):
* Appears to be a new "species" of **Restrictionist** approaches that also doesn't require every **Sentence** or **Theorem** to be "Cleaned", "Healthy", or "Debuggered".
  * E.g. - those approaches that follow the Classical Axiom, Theorem, and Tautology: **Weakening** `P → (Q → P)`.
  * The **T-Scheme** is actually a **Material Conditional** with some **Constraint**, "Checkpoint", or condition that must be met / a "Restriction" on it.
* Invalidates the move from **P1** to **P2** (by Substitution or Diagonalization).
* Sorted expressions are nevertheless given **Truth-Values** and don't entail **Untruth** (or **Falsity**).
* So, both **Truth Opaque** and non-**Truth Opaque Sentences** are allowed - they are not "banned" or "outlawed".
* Not clear that **Diagonalization** is legitimate for such **Sorted Expressions**. In the original papers by Gödel, **Diagonalization** is justified only up to and for *primitive recursive number-theoretic function*(s). As such, it's not clear a **Revenge**-type **Sentence** can be constructed at all for **KFG**.
* **Truth Opaque Expressions** aren't necessarily **Theorems** nor are the assertions of them as such.
* The conclusion of the argument is essentially that **KFG** will prove a Theorem that's **Truth Opaque**.  Consider the unproblematic Sentence: `S := T(S) → T(S)` - it's a Theorem, receives Truth Values, and is **Truth Opaque**.

Blocks **McGee's T-Intro** step.

Satisfies **Tarski's Undefinability Theorem** for **T-Scheme** since `S` and `T(⟨S⟩)` can be **Logically Consistent** yet diverge in Truth Values within **KFG**.

## Some Validations and Truth Table Proofs

Some simple **Truth Table** and basic Model checking summarized succinctly below.

> Depicts some Models of **KFG** and proves **Consistency** of **KFG** with respect to **Liar Cycles**.

> Demonstrates Classically Consistent Models (the primary goal) and ways to address the ancillary goals: **KFG** global validity and embedded **Catuṣkoṭi**.

Since `S` can be any arbitrary **Sentence** within **KFG**, the below constitutes a **Consistency Proof** by **Mathematical Induction** (per **pp. 11** of the original draft).

### Truth Assignments 

The **Truth-Value** for `S ∈ C` is determined by the **Truth Opacity** of a **Sentence** and prior to **Truth-Assignments**. (It's a constraint on the **Interpretation Function** itself as specified in the Draft Paper.)

> Below, `T(S) ↔ S` refers to the specific WFF with Sentential Constant `S` substituted into **T-Scheme**.

### Truth Eliminable Sentences

Truth Table Semantics:

| `S` | `¬S` | `C(S)` (`S ∈ C`) | `¬C(S)` | `T(S)` | `¬T(S)` | `T(S) ↔ S` | `C(S) → (T(S) ↔ S)` | 
| --- | --- | --- | --- | --- | --- | --- | --- |
| `⊥` | `⊤` | `⊤` | `⊥` | `⊤`* | `⊥`* | `⊥`* | `⊥`* |
| `⊥` | `⊤` | `⊤` | `⊥` | `⊥` | `⊤` | `⊤` | `⊤` |
| `⊤` | `⊥` | `⊤` | `⊥` | `⊤` | `⊥` | `⊤` | `⊤` |
| `⊤` | `⊥` | `⊤` | `⊥` | `⊥`* | `⊤`* | `⊥`* | `⊥`* |

There are two ways to read this:

1. *Modus Tollens* on the **Argument from Tautology**. If **T-Scheme** is a **Tautology** then so too is `Q → T-Scheme`. If `Q → T-Scheme` isn't a **Tautology** then neither is **T-Scheme** (which is precisely what `Q → T-Scheme` is showing in the first place - e.g. **Weakened T-Scheme**). On this view, both **T-Scheme** and **KFG** are **Contingent**.
2. The fourth and first **Interpretations** above can be ruled out by additional (optional) extensions that modify how the **Interpretation Function** behaves (this is the route primarily endorsed by the Draft Paper but isn't the only route available. In the original Draft, `S` and `T(S)` are harmonized through additional rules added to the construction step of `C(S)` that convert `*` to the second or third interpretation.) prior to **Truth Assignment** itself (akin to the way that the Truth of **Logical Connectives** are calculated after **Atomic Proposition Truth Assignment** and **ZFC Set Theory** which has a complicated setup for the **Domain of Discourse** - both **ZFC Set Theory** and **Zero-Order Logic** are part of **KFG**). This converts **KFG** into a global validity (**Tautology**) otherwise it'll fail will the above unmodified construction (whilst remaining **(Logically) Consistent** nevertheless).

### Truth Opaque Sentences

Truth Table Semantics:

| `S` | `¬S` | `C(S)` (`S ∈ C`) | `¬C(S)` | `T(S)` | `¬T(S)` | `T(S) ↔ S` | `C(S) → (T(S) ↔ S)` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `⊤` | `⊥` | `⊥` | `⊤` | `⊥` | `⊤` | `⊥` | `⊤` |
| `⊤` | `⊥` | `⊥` | `⊤` | `⊤` | `⊥` | `⊤` | `⊤` |
| `⊥` | `⊤` | `⊥` | `⊤` | `⊥` | `⊤` | `⊤` | `⊤` |
| `⊥` | `⊤` | `⊥` | `⊤` | `⊤` | `⊥` | `⊥` | `⊤` |

Comments:

1. **Truth Teller** (and **Liar Cycle Negator**) expressions are given the second or third **Interpretations** above.
2. **Liar Sentences** expressions are given the first or fourth **Interpretations** above.

### Liar Cycles

> `S := T(Q)`, `Q := ¬T(S)`

Here:
1. We only need to prove that *at least one* **Consistent Interpretation** exists.
2. The following pairs must share Truth-Values:
   * `S`, `T(Q)` 
   * `¬S`, `¬T(Q)`
   * `Q`, `¬T(S)` 
   * `¬Q`, `T(S)`

| `S` | `T(Q)` | `¬S` |  `¬T(Q)` | `Q` | `¬T(S)` |  `¬Q` | `T(S)` | **Consistent** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `NO` |
| `⊥` | `⊥` | `⊥` | `⊥` | `⊥` | `⊥` | `⊥` | `⊥` | `NO` |
| `⊤` | `⊤` | `⊥` | `⊥` | `⊤` | `⊤` | `⊤` | `⊤` | `NO` |
| `⊤` | `⊤` | `⊤` | `⊤` | `⊥` | `⊥` | `⊤` | `⊤` | `NO` |
| `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `⊥` | `⊥` | `NO` |
| `⊥` | `⊥` | `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `⊤` | `NO` |
| `...` | `...` | `...` | `...` | `...` | `...` | `...` | `...` | `NO` |
| `⊥` | `⊥` | `⊤` | `⊤` | `⊤` | `⊤` | `⊥` | `⊥` | `YES` |
| `⊤` | `⊤` |  `⊥` | `⊥` |  `⊥` | `⊥` | `⊤` | `⊤` | `YES` |

Note:
1. One of the paired **Sentences** can behave like the **Truth Teller**. (The **Liar Cycle Negator** of the pair.)
2. We also require (through optional extensions) that **T-Scheme** fails if a **Sentence** refers to a another **Truth Opaque** Sentence.

#### Liar Cycle Semantics and KFG

Regarding the last two **Interpretations**:

| `S` | `¬S` | `C(S)` (`S ∈ C`) | `¬C(S)` | `T(S)` | `¬T(S)` | `T(S) ↔ S` | `C(S) → (T(S) ↔ S)` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `⊥` | `⊤` | `⊥` | `⊤` | `⊥` | `⊤` | `⊤` | `⊤` |
| `⊤` | `⊥` | `⊥` | `⊤` | `⊤` | `⊥` | `⊤` | `⊤` |

| `Q` | `¬Q` | `C(Q)` (`Q ∈ C`) | `¬C(Q)` | `T(Q)` | `¬T(Q)` | `T(Q) ↔ Q` | `C(Q) → (T(Q) ↔ Q)` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `⊤` | `⊥` | `⊥` | `⊤` | `⊥` | `⊤` | `⊥` | `⊤` |
| `⊥` | `⊤` | `⊥` | `⊤` | `⊤` | `⊥` | `⊥` | `⊤` |

Immediately above:
1. Each **Model** pairs the respective first and second **Interpretations**.
2. We observe that `Q` (the **Liar Cycle Negator** of the pair) behaves like **Truth Tellers**.

### Catuṣkoṭi

> Some interesting phenomena.

With **F-Scheme** (`¬T(S) ↔ F(S)`) unmodified:

| `S` | `¬S` | `T(S)` | `¬T(S)` | **Comment** | `T(S) ↔ S` | `C(S) → (T(S) ↔ S)` |
| --- | --- | --- | --- | --- | --- | --- |
| `⊥` | `⊤` | `⊥` | `⊤` | `False` | `⊤` |  `⊤` |
| `⊥` | `⊤` | `⊤` | `⊥` | `True and False` | `⊥` | Depends on `S` being **Truth Opaque** or not (per the above). |
| `⊤` | `⊥` | `⊥` | `⊤` | `True and False` | `⊥` | Depends on `S` being **Truth Opaque** or not (per the above). |
| `⊤` | `⊥` | `⊤` | `⊥` | `True` | `⊤` |  `⊤` |

The above mirrors **Kleene 3-Value** constructions. The assertion would be that:
1. Confusion around **3-Value Semantics**;
2. And, Tarski's **Object-Level/Meta-Level** intutions would then be seen to stem from mismatching **Truth Values**/**Truth Predicates** (where **Language** levels are replaced by priority in **Truth Assignment** within the same **Language**).

With **F-Scheme** also **Weakened** (e.g. - `¬T(S) ↔ F(S)` will sometimes fail), the **Catuṣkoṭi** appears:

| `S` | `¬S` | `T(S)` | `¬T(S)` | `F(S)` | `¬F(S)` | Comment |
| --- | --- | --- | --- | --- | --- | --- |
| `⊥` | `⊤` | `⊥` | `⊤` | `⊤` | `⊥` | `False` |
| `⊥` | `⊤` | `⊥` | `⊤` | `⊥` | `⊤` | `Neither True nor False` |
| `⊥` | `⊤` | `⊤` | `⊥` | `⊤` | `⊥` | `True and False` |
| `⊥` | `⊤` | `⊤` | `⊥` | `⊥` | `⊤` | `True` |
| `⊤` | `⊥` | `⊥` | `⊤` | `⊤` | `⊥` | `False` |
| `⊤` | `⊥` | `⊥` | `⊤` | `⊥` | `⊤` | `Neither True nor False` |
| `⊤` | `⊥` | `⊤` | `⊥` | `⊤` | `⊥` | `True and False` |
| `⊤` | `⊥` | `⊤` | `⊥` | `⊥` | `⊤` | `True` |

> The above is the approach recommended in the original Draft - at that time I referred to them as "defects" being unaware of **The Catuṣkoṭi**. I was also unaware that similar "quirks" also appear in JavaScript: `[] == ![]; // -> true`, `true == ![]; // -> false`, `false == ![]; // -> true`.

> To be clearer still: therefore, the many great religions of the world (as well as their opposites - their heresies) - Orthodox Christianity, Catholicism, Islam, Hinduism, Buddhism, Judaism, and many more still - along with the greatest mathematical and scientific theorists, Hegelians, Platonists, Aristotelians, and all the other major views of philosophy about Truth can be inclusively accommodated. **KFG** *does not* rule on which of these interpretations is correct but *it's the only view that does not rule any of them out*. In this way it is thoroughly pluralist and inclusive of the world's greatest ideas.

Please note that the above can all be **Consistently** captured within a **Two-Value**, **Bivalent**, **Classical** Semantics. We've relaxed the required on `T()` and `F()` per the above.

This is the only proposed system that can accomodate all the additional items below:
1. Parallels intuitions that motivate **3-Value Semantics**.
2. **The Catuṣkoṭi**.
3. The empirical fact that people have taken all four positions regarding the **Liar Sentence**:  `False`, `Neither True nor False`, `True and False`, `True`. No other system can "subsume" the rest.
4. Is **Classical**.
5. Gets all the other Truth-related (**Alethic**) Paradoxes.
6. Satifies **Tarski's Undefinability Theorem** for **T-Scheme**.
7. Blocks McGee's **T-Intro** step.
8. Is not harmed by Bacon's 2015 argument. If `C` is a predicate it just shows that there's a **Theorem** that's **Truth Opaque** (`S := T(S) → T(S)`) otherwise one can't **Diagonalize** into it at all.

## Extensions

So, **KFG** opens the door to a fully **Classical**, **Monistic** (single Truth Predicate), and **Restrictionism** (as a topic in multiple debates: Logical Nihilism, Logical Skepticism, Alethic Paradox, etc.). 

By selecting extensible constructions variants of **KFG** strengthen certain features discussed above:

1. Harmonization of Truth Assignments (aligning Truth Values and Truth Predicates in consistent assingments).
2. Preference for Predicates over Set Inclusion or vice-versa.
3. Model selection.
4. Analyticity of the Restricted T-Scheme.

I think this is akin to subfields like the debate between `S4` vs `S5 Modal Logic`, the correct semantics for Modality, and so on.

> And indeed such an approach aligns well with the general history of mathematical logic: Lukasiewicz, Spencer-Brown, Nicod, Syllogistic Square, Tarski, Tableaux methods, Venn, Boole, and the like all leverage creativity with **Classical** constructivity to tackle similar questions from different vantage points. No modification of **Classical** logic or Set Theory is required!

## Key Philosophical Arguments

1. The **Argument from Tautology**:
   * If **T-Scheme** is **Analytic**, then so is **Restricted T-Scheme** (by Classical inferential **Weakening**)
   * If **Restricted T-Scheme** isn't **Analytic**, then **T-Scheme** isn't (**Modus Tollens**). But, then **T-Scheme** would be **Restricted** in some form (or just wrong) undermining the alternatives.
     * If **T-Scheme** is **Restricted**, it collapses into **KFG**.
     * If not, then we have no reason to defend **T-Scheme** in the first place.
2. The **Argument from History**:
   * Every supposedly Universal (scientific) Law, Scientific Theory, and Mathematical Axiom has been proven False (Globally or Locally - the so-called *Pessimistic Meta-Induction*). Examples: Relativity only applies at the "macro-level", Hyperbolic Geometry which rejects Axioms of Euclidean Geometry, etc.
   * Truth is a scientific and natural language phenomena (Linguistics is the science of language).
   * Therefore, we have no good reason to think that Truth Predication wouldn't also be similarly **Restricted** to a subdomain of naturally occurring phenomena. (E.g. it fails for **Truth Opacity** but not for **Truth Eliminability**.)
3. It's the only theory that explains all the diverging views on the Truth Predicate and **Liar Sentence** (it accommodate each other approach within the consistent models described above - e.g. the **Catuṣkoṭi**). In that way it's the only theory that aligns with the empirical data! (The countless attempts and approaches to solve the **Liar Paradox** - why there are many, diverging Truth Values, why we can even talk about different Truth Assignments for the **Liar Sentence**!)
4. Similar quirks show up in JavaScript and other programming languages.
   ```javascript
   // JavaScript
   [] == ![]; // -> true
   true == ![]; // -> false
   false == ![]; // -> true
   ```
5. It provides a philosophical and technical solution (formal proof of correctness).
6. It gets all the phenomena and is **Consistent**.
7. On **Classicality** itself:
   * Note: **KFG** *does not* commit one to the "truth"/"correctness" of **Classical Logic** (merely that **Classical Logic** is **Logically Consistent** and therefore should not be hastily abandoned for **Non-Classical Logic** upon consideration of the **Liar Paradox**).
   * In other words, the **Logical Realism** debate (e.g. - "Which Logic (if any) or Logics are the ultimate descriptin of reality or *The Correct Logic*") is a *separate* concern (although **KFG** might be of interest in that debate too).
   * The proofs given above hold in **Kleene 3-Value Algebras** (so the approach doesn't rely on **Classical Logic** or *Beg the Question* w.r.t. the correctness of the Metalogic at hand - they don't require **Classical Logic** to hold in the Metalogic).

## Resources and Links

> *Non-Exhaustive (but sufficient for what's described in the contents of this README) - please see the Paper for a complete Bibliography*.

1. Bacon, A. Can the Classical Logician Avoid the Revenge Paradoxes? Philosophical Review. 124 pp. 299-352 (2015, 7)
1. Beall, J. A Neglected Deflationist Approach to the Liar. Analysis. 61, 126-129 (2001)
1. Beall, J. Prolegomenon to Future Revenge. Revenge Of The Liar: New Essays On The Paradox. pp. 1-30 (2007)
1. Feferman, S. Axioms for Determinateness and Truth. Review Of Symbolic Logic. 1, 204-217 (2008)
1. Kripke, S. Outline of a Theory of Truth. Journal Of Philosophy. 72, 690-716 (1975)
1. Priest, G. Doubt Truth to Be a Liar. (Oxford University Press, 2006)
1. Priest, G. Logic of Paradox. Journal Of Philosophical Logic. 8, 219-241 (1979)
1. Tarski, A. The Semantic Conception of Truth and the Foundations of Semantics. Philosophy And Phenomenological Research. 4, 341-376 (1943)
1. https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#true-is-not-equal--but-not-equal--too
1. https://logic.pku.edu.cn/ann_attachments/the%20outline%20of%20a%20new%20solution%20to%20the%20liar%20paradox134720412881.pdf




