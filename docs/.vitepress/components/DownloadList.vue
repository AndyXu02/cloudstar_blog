<script setup lang="ts">
import {
  Download,
  FileText,
  HardDrive,
  Key,
  RefreshCw
} from 'lucide-vue-next'
import { reactive } from 'vue'

type DownloadItem = {
  title: string
  description: string
  href?: string
  icon: 'file' | 'key' | 'refresh' | 'disk'
  tone: 'blue' | 'green' | 'amber' | 'slate'
}

const items = reactive<DownloadItem[]>([
  {
    title: '系统激活（教程）',
    description: 'Windows / Office 激活相关指引。',
    href: '/tutorial/activation',
    icon: 'key',
    tone: 'blue'
  },
  {
    title: '重做系统（教程）',
    description: 'U 盘重装 Windows 的完整流程。',
    href: '/tutorial/reinstall',
    icon: 'refresh',
    tone: 'green'
  },
  {
    title: '故障排查（教程）',
    description: '常见开机/蓝屏/温度/噪音问题自查。',
    href: '/tutorial/troubleshooting',
    icon: 'disk',
    tone: 'slate'
  },
  {
    title: '资源下载（占位）',
    description: '驱动、工具、清单模板等资源入口（后续补充）。',
    href: '#',
    icon: 'file',
    tone: 'amber'
  }
])

function onDownloadZip() {
  // Placeholder behavior
  console.log('[DownloadList] Download ZIP clicked')
}

function iconFor(item: DownloadItem) {
  switch (item.icon) {
    case 'key':
      return Key
    case 'refresh':
      return RefreshCw
    case 'disk':
      return HardDrive
    default:
      return FileText
  }
}

function toneClass(item: DownloadItem) {
  switch (item.tone) {
    case 'green':
      return 'bg-green-100 text-green-600'
    case 'amber':
      return 'bg-amber-100 text-amber-700'
    case 'slate':
      return 'bg-slate-100 text-slate-700'
    default:
      return 'bg-blue-100 text-blue-600'
  }
}
</script>

<template>
  <div class="bg-slate-100 py-10 px-4">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="bg-blue-600 text-white px-6 py-5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-lg bg-white/15 flex items-center justify-center">
            <Download class="h-5 w-5" />
          </div>
          <div>
            <div class="text-lg font-semibold leading-tight">资源 / 教程下载</div>
            <div class="text-sm text-white/85">清爽卡片式列表，后续可随时增删条目。</div>
          </div>
        </div>
        <button
          type="button"
          class="bg-white text-blue-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-50 active:bg-slate-100 transition"
          @click="onDownloadZip"
        >
          Download ZIP
        </button>
      </div>

      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            v-for="item in items"
            :key="item.title"
            :href="item.href"
            class="bg-white border border-gray-200 rounded-lg p-4 flex gap-4 hover:bg-slate-50 transition"
          >
            <div
              class="h-11 w-11 rounded-lg flex items-center justify-center shrink-0"
              :class="toneClass(item)"
            >
              <component :is="iconFor(item)" class="h-5 w-5" />
            </div>
            <div class="min-w-0">
              <div class="font-semibold text-slate-900 leading-snug">
                {{ item.title }}
              </div>
              <div class="text-sm text-slate-600 mt-1 leading-relaxed">
                {{ item.description }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
