import { sleep } from './lib.ts'

// eslint-disable-next-line @typescript-eslint/require-await
async function main(): Promise<void> {
    process.stdout.write('Hello! ')
    for (let i = 1; i < 10; i++) {
        await sleep(100)
        process.stdout.write('.')
    }
}

main().catch(console.error)
