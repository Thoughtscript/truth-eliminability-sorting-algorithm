'use strict'

/*
 * @Author - Adam In Tae Gerard - thoughtscript.io
 *
 * For non-commercial purposes only. 
 * 
 * A rough sketch of a general technique in JavaScript.
 * 
 * Likely vastly sub-optimal!!!!
 */

const TEST_CASES = {
    TRUTH_TELLER: ["S := T(S)"],

    // Tarski, Philetas of Cos
    LIAR_SENTENCE: ["S := ¬T(S)"],

    LIAR_CYCLE: ["S := T(Q)", "Q := ¬T(S)"],

    /*
        Here's an example of this limited approach to the general technique.
        
        All Computer Science is Recursive, Constructive, and Computable.
        
        Strictly-speaking this and Yablo-Visser are Infinitary 
        and cannot be modeled fully on modern Turing Machines.
        
        They seemingly require Hypercomputation to render a N + 1 Decideable in N time.

        (Believe I'm the first to describe this one?)
    */
    INFINITARY_LIAR_CYCLE: ["A := T(B)", "...", "Z := ¬T(A)"],

    // Yablo and Visser
    YABLO_VISSER_SEQUENCE: ["Sn0 := ∀x∀n>0(¬T(Xn))", "Sn+1 := ∀x∀n>1(¬T(Xn))", "..."],

    /*
        McGee
        https://users.ox.ac.uk/~sfop0114/Lugano24/pdf/lugano3.pdf
        https://www.academia.edu/20165655/A_Note_on_McGees_omega_Inconsistency_Result
     */
    MCGEE_SENTENCE: ["𝛾 := ¬Tω(𝛾)"],

    // Beall, Ripley, Restall
    NON_CONTRADICTORY_REVENGE_SENTENCE: ["S := C(S)"],
    CONTRADICTORY_REVENGE_SENTENCE: ["S := C(S) → ¬T(S)"],

    BOOLEAN_COMPOUND: ["S := ¬T(S) ∨ ⊥"],

    // Haskell Curry
    CURRY_SENTENCE: ["S := T(S) → ⊥"],

    /*
        Direct and Indirect Reference example from original paper: 
        https://thoughtscript-io.onrender.com/papers/000000000002.html
     */
    LOGICAL_OPERATOR_SEQUENCE: ["S := P ∨ Q", "Q := P", "P"],
    ANOTHER_LOGICAL_OPERATOR_SEQUENCE: ["P ∨ Q", "¬R", "Z → V"],
    ATOMIC_SEQUENCE: ["S", "P", "Q"],
    FIRST_ORDER_SEQUENCE: ["∀x(P(x))", "∃x(P(x))", "∃x(V(x) → Q(x))"],
    SECOND_ORDER_SEQUENCE: ["∃x(s ∊ Q)", "∃x(s ∊ Q) → ∃y∀x(y ⊂ R ∧ x ⊆ Z)"],
    ANOTHER_SECOND_ORDER_SEQUENCE: ["∃x∃P(P(x))", "∀x∀y∃R(R(x,y) ∧ R(y,x))"],
    ARITHMETIC_SEQUENCE: ["1 + 1 = 2", "4 - 1 = 3"],
    ORIGINAL_UNGROUNDED_EXAMPLE_SEQUENCE: ["S := P", "P := T(⟨Q⟩)", "Q"],
    OTHER_PREDICATE_TEST_SEQUENCE: ["S := G(Q)", "Q := P", "P"],
    ANOTHER_PREDICATE_TEST_SEQUENCE: ["S := G(Q)", "Q := G(⟨P⟩)", "P"],
    // Below (and above): Q is already a Name but Z isn't and G() is some arbitrary Meta-Linguistic Predicate.
    YET_ANOTHER_PREDICATE_TEST_SEQUENCE: ["S := G(Q)", "Q := G(P)", "P := G(⟨Z⟩)", "Z"]
}

const prep = seq => {
    let auxBuffer = [], sentenceMap = {}

    for (let i = 0; i < seq.length; i++) {
        const S = seq[i], sArr = S.split(":=")

        let exp = sArr[0], name = sArr[0].trimLeft().trimRight()
        if (sArr.length > 1) exp = sArr[1].trimLeft().trimRight()

        auxBuffer.push(exp)
        sentenceMap[name] = exp
    }

    return [auxBuffer, sentenceMap]
}

const unpackSentences = data => {
    const auxBuffer = data[0], sentenceMap = data[1]

    let nextAuxBuffer = [], found = false, rmvRightBracket = false

    for (let i = 0; i < auxBuffer.length; i++) {
        // Iterate through each and check if exist in SentenceMap and replace
        let temp = []
        for (let j = 0; j < auxBuffer[i].length; j++) {
            const CH = auxBuffer[i][j]

            if (rmvRightBracket && CH === "⟩") {
                rmvRightBracket = false
                continue
            }

            if (sentenceMap[CH] && sentenceMap[CH] !== CH && sentenceMap[CH].indexOf(CH) === -1) {
                if (temp[temp.length - 1] === "⟨") {
                    temp[temp.length - 1] = sentenceMap[CH]
                    rmvRightBracket = true
                } else temp.push(sentenceMap[CH])

                found = true
                logDebug(`Found Sentence Name ${CH} in ${auxBuffer[i]} | resolving Sentence Name ${CH} := ${sentenceMap[CH]} | result: ${temp.join("")}...`)

            } else temp.push(CH)
        }

        nextAuxBuffer.push(temp.join(""))
    }

    return (found) ? checkHasTruthPredicate([nextAuxBuffer, sentenceMap]) : found
}

const checkHasTruthPredicate = data => {
    const auxBuffer = data[0]

    for (let i = 0; i < auxBuffer.length; i++) {
        const currentExp = auxBuffer[i]

        /*
            Check if Truth Predicate present w/ ReGex 
            generalized to McGee Sentences and standard 
            unsubscripted/unsuperscripted Truth Predicates.

            Allow both Names and Name Forming Operator.
         */
        const RE = new RegExp(/T.*\(\⟨*/g), F = currentExp.match(RE)

        // If so, stop. Roughly, O(1) for all of the above examples.
        if (F && F.length) {
            logDebug(`Truth Predicate found in: ${currentExp} ...`)
            return true
        }
    }

    return unpackSentences(data)
}

const sort = (testSet = TEST_CASES) => {
    const KEYS = Object.keys(testSet)

    let C_PRIME = {}, C = {}

    for (let i = 0; i < KEYS.length; i++) {
        logDebug(`Trying: ${KEYS[i]}`)
        const SEQ = testSet[KEYS[i]], isTruthOpaque = checkHasTruthPredicate(prep(SEQ))
        if (isTruthOpaque) C_PRIME[KEYS[i]] = SEQ
        else C[KEYS[i]] = SEQ
    }

    printObj(C, "output-ok")

    printObj(C_PRIME, "output-bad")
}

const printObj = (obj, root) => {
    logDebug("Object received: ")
    logDebug(JSON.stringify(obj))

    const UL = document.getElementById(root),
        O_K = Object.keys(obj)

    for (let i = 0; i < O_K.length; i++) {
        const LI = document.createElement("LI"),
            DIV = document.createElement("div"),
            M = `${O_K[i]} : ${obj[O_K[i]]}`

        DIV.innerText = M
        logDebug(M)

        LI.appendChild(DIV)
        UL.appendChild(LI)
    }
}

const logDebug = (msg) => {
    console.log(msg)

    const UL = document.getElementById("output-debug"),
        LI = document.createElement("LI"),
        DIV = document.createElement("div")

    DIV.innerText = `${msg}`

    LI.appendChild(DIV)
    UL.appendChild(LI)
}

sort()

