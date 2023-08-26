const udin1 = { massa: 78, tinggi: 1.69 }
const nanang1 = { massa: 92, tinggi: 1.95 }

const udin2 = { massa: 95, tinggi: 1.88 }
const nanang2 = { massa: 85, tinggi: 1.76 }

const kalkulasiBmi = (massa, tinggi) => massa / tinggi ** 2

const cekBmi = (dataUdin, dataNanang) => {
    const bmiUdin = kalkulasiBmi(dataUdin.massa, dataUdin.tinggi).toFixed(1)
    const bmiNanang = kalkulasiBmi(dataNanang.massa, dataNanang.tinggi).toFixed(1)

    const kondisi = bmiUdin > bmiNanang

    if (kondisi)
        console.log(`BMI Udin (${bmiUdin}) lebih "tinggi" dari Nanang (${bmiNanang})`)
    else
        console.log(`BMI Udin (${bmiUdin}) lebih "rendah" dari Nanang (${bmiNanang})`)
}

cekBmi(udin1, nanang1)
cekBmi(udin2, nanang2)