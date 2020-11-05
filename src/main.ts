import * as fs from 'fs'
import csv from 'csvtojson'

/**
 * file name without extension
 */
const fileName = 'test'

const csvFilePath = `${__dirname}/../files/${fileName}.csv`

const main = async () => {
  const jsonArray = await csv().fromFile(csvFilePath)

  try {
    await fs.writeFileSync(
      __dirname + `/../files/RESULT_${fileName}.json`,
      JSON.stringify(jsonArray),
    )
  } catch (error) {
    console.log(error)
  }
}

main()
