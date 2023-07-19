import React from 'react'

const MoukUp = () => {
  return (
    <div className="mockup-code w-1/2 shadow-2xl shadow-purple-500 mt-20">
    <pre data-prefix="$"><code>Paste your link down below</code></pre> 
    <pre data-prefix=">" className="text-warning mb-2"><code>We aceppt youtube and tiktok videos</code></pre> 
    <pre data-prefix=">" className="text-success"><input type="text" placeholder="Put the video's link here..." className="input input-bordered w-full max-w-xs" /></pre>
  </div>
  )
}

export default MoukUp