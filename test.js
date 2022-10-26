const RunTest = {
    test1() {
        setTimeout(() => {
            try {
                const unchecked = ["plant", "water", "wait", "harvest"].filter(it => {
                    return document.getElementById(it).textContent !== "✅"
                })
                if (unchecked.length > 0) {
                    document.getElementsByClassName("error")[0].textContent = `'${unchecked[0]}' is unchecked still`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    }
}