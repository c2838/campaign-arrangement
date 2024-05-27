const tableDatas = {
  checkbox: "./images/checkbox.svg",
  id: "1",
  name: "Christmas 2020",
  advertiser: "Food Market",
  advertiser_group: "Krab",
  description: "holiday night during chr...",
  price: "$2000",
  start: "2020/12/24 19:30",
  end: "2021/01/02 23:00",
  actions: "./images/menu.svg"
}



function dataGenerator() {
  const contentDatas = document.querySelector('.main-content-datas')
  for(let i = 1; i <= 20; i++) {
    contentDatas.innerHTML += `
      <ul class="datas" data-id=${i}>
        <li class="data-item" id="data-checkbox"><input type="checkbox"></li>
        <li class="data-item" id="data-id">${tableDatas.id}</li>
        <li class="data-item" id="data-name">${tableDatas.name}</li>
        <li class="data-item" id="data-advertiser">${tableDatas.advertiser}<p>${tableDatas.advertiser_group}</p>
        </li>
        <li class="data-item" id="data-descripition">${tableDatas.description}</li>
        <li class="data-item" id="data-price">${tableDatas.price}</li>
        <li class="data-item" id="data-start">${tableDatas.start}</li>
        <li class="data-item" id="data-end">${tableDatas.end}</li>
        <li class="data-item" id="data-actions"><img src="${tableDatas.actions}" alt=""></li>
      </ul>`
  }
}

function changeBgColor() {
  const dataUl = document.querySelectorAll('.datas')
  dataUl.forEach((data, key) => {
    if (key % 2 === 0) {
      data.style = "background-color: #fff;"
    } else {
      data.style = "background-color: #E9E9E9;"
    }
  })
}

function selectItemActive(event) {
  const target = event.target
  const selectItem = document.querySelectorAll('.select-item')
  const node = target.closest('.select-item')
  selectItem.forEach(element => {
    element.classList.remove('active')
  })
  node.classList.add('active')
}

dataGenerator()
changeBgColor()

const selectors = document.querySelector('.nav-selectors')
selectors.addEventListener('click', selectItemActive)