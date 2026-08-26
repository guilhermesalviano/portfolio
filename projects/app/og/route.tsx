import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export function GET() {
  let title = 'Software Developer | Guilherme Salviano'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white" style={{
        background: 'linear-gradient(135deg, #E3E3E2, #1C2126)', // Gradient background
        color: '#ffffff', // White text
      }}>
        <img
          src="https://avatars.githubusercontent.com/u/36766110?v=4"
          alt="Logo"
          width="256"
          height="256"
          tw="w-32 h-32 rounded-full border-white shadow-lg"
        />
        <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-center py-1">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-center">
            {title}
          </h2>
        </div>
        <div tw="flex items-center justify-center text-xl text-center max-w-xl">
          <span>“I have not failed. I've just found 10,000 ways that won't work.” – Thomas Edison</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
