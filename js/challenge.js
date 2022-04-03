document.addEventListener('DOMContentLoaded', function () {
  countTimer()
})



function countTimer() {
  let count = 0
  const timer = setInterval(() => {
    let timerValue = document.getElementById('counter')
    count += 1
    timerValue.innerHTML = count
  }, 1000)
  document.getElementById('minus').addEventListener("click", () => {
    let timerValue = document.getElementById('counter')
    count -= 1
    timerValue.innerHTML = count
  })
  document.getElementById('plus').addEventListener("click", () => {
    let timerValue = document.getElementById('counter')
    count += 1
    timerValue.innerHTML = count
  })
  document.getElementById('heart').addEventListener("click", () => {
    if (!document.getElementById(`${count}`)) {
      const li = document.createElement("li")
      const amount = 1
      li.textContent = `${count} has been liked ${amount} times.`
      li.id = count
      li.value = amount
      const countLikes = document.getElementsByClassName('likes')
      countLikes[0].append(li)
      console.log(countLikes)
    }
    else {
      const li = document.getElementById(`${count}`)
      li.value += 1
      const amount = li.value
      li.textContent = `${count} has been liked ${amount} times.`
    }
  })
  document.getElementById('pause').addEventListener("click", () => {
    if (document.getElementById('pause').innerText === 'pause') {
      clearInterval(timer)
      document.getElementById('minus').disabled = true
      document.getElementById('plus').disabled = true
      document.getElementById('heart').disabled = true
      pause.innerText = ("resume")
    }
    else {
      document.getElementById('minus').disabled = false
      document.getElementById('plus').disabled = false
      document.getElementById('heart').disabled = false
      const timer = setInterval(() => {
        let timerValue = document.getElementById('counter')
        count += 1
        timerValue.innerHTML = count
      }, 1000)
      pause.innerText = ("pause")
    }
  })
  document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault()

    const li = document.createElement("li")
    li.textContent = document.querySelector('input#comment-input').value
    document.getElementById("comment-form").append(li)
  })
}