
import {Zap, Shield, Clock, Smartphone } from 'lucide-react'
function Features() {
  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Fast download', description: 'Get your videos in seconds' },
    { icon: <Shield className="w-6 h-6" />, title: 'Secure', description: '100% privates and secure downloads' },
    { icon: <Clock className="w-6 h-6" />, title: 'Limitless', description: 'Download as many videos as you want.' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Multiplatform', description: 'Works in all devices' },
  ]

  return (
    <div className="py-20 px-4 bg-transparent">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-purple-900 bg-opacity-20 p-6 rounded-lg text-center hover:bg-opacity-30 transition duration-300">
            <div className="text-purple-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-purple-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>


  )
}

export default Features