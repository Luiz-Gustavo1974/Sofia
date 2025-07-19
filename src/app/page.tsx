"use client"

import React, { useState, useEffect } from 'react'

interface Metric {
  id: string
  title: string
  value: string
  change: string
}

interface Conversation {
  id: string
  customer: string
  status: 'active' | 'pending' | 'resolved'
  lastMessage: string
  timestamp: string
}

export default function SofiaEnterprise() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics([
        {
          id: '1',
          title: 'Conversas Ativas',
          value: '847',
          change: '+12%'
        },
        {
          id: '2', 
          title: 'Clientes Ativos',
          value: '2,394',
          change: '+8%'
        },
        {
          id: '3',
          title: 'Taxa Conversão',
          value: '94.2%',
          change: '+2.1%'
        },
        {
          id: '4',
          title: 'Uptime IA',
          value: '99.9%',
          change: '+0.1%'
        }
      ])

      setConversations([
        {
          id: '1',
          customer: 'João Silva',
          status: 'active',
          lastMessage: 'Preciso agendar uma consulta',
          timestamp: '2 min atrás'
        },
        {
          id: '2',
          customer: 'Maria Santos',
          status: 'pending',
          lastMessage: 'Qual o valor do tratamento?',
          timestamp: '5 min atrás'
        },
        {
          id: '3',
          customer: 'Pedro Costa',
          status: 'resolved',
          lastMessage: 'Muito obrigado pelo atendimento!',
          timestamp: '10 min atrás'
        }
      ])

      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800' 
      case 'resolved': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Ativa'
      case 'pending': return 'Pendente'
      case 'resolved': return 'Resolvida'
      default: return 'Desconhecido'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center">
        <div className="text-white text-xl font-semibold animate-pulse">
          Carregando Sofia Enterprise...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 text-white">🧠</div>
              <h1 className="text-2xl font-bold text-white">Sofia Enterprise</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                🛡️ Sistema Ativo
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="text-sm font-medium text-white/80">
                  {metric.title}
                </h3>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <p className="text-xs text-green-300">
                  {metric.change} desde ontem
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">Conversas Recentes</h3>
              <p className="text-sm text-white/70">
                Últimas interações com clientes via WhatsApp
              </p>
            </div>
            <div className="p-6 space-y-4">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {conversation.customer.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{conversation.customer}</p>
                      <p className="text-white/60 text-sm">{conversation.lastMessage}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded text-xs ${getStatusColor(conversation.status)}`}>
                      {getStatusLabel(conversation.status)}
                    </div>
                    <p className="text-white/60 text-xs mt-1">{conversation.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">Controles Sofia</h3>
              <p className="text-sm text-white/70">
                Gerenciamento do sistema IA
              </p>
            </div>
            <div className="p-6 space-y-4">
              <button 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white px-4 py-2 rounded-lg"
                onClick={() => alert('Sofia Enterprise Online!')}
              >
                💬 Testar Sistema
              </button>
              
              <div className="pt-4 border-t border-white/20">
                <h4 className="text-white font-medium mb-2">Status do Sistema</h4>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>WhatsApp API</span>
                    <span className="text-green-300">✓ Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IA GPT-4</span>
                    <span className="text-green-300">✓ Ativa</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base de Dados</span>
                    <span className="text-green-300">✓ Conectada</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sofia Guardian</span>
                    <span className="text-green-300">✓ Monitorando</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
