#!/bin/bash
set -e

echo "=== 西班牙行程網站部署腳本 ==="

# 1. Build
echo "📦 正在建置..."
npm run build

# 2. 確認 out 目錄存在
if [ ! -d "out" ]; then
    echo "❌ 錯誤：out 目錄不存在，建置失敗"
    exit 1
fi

echo "✅ 建置成功，out 目錄已生成"

# 3. 部署到 Vercel
echo "🚀 正在部署到 Vercel..."
npx vercel --prod --yes

echo "✅ 部署完成！"
