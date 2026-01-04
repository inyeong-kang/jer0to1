export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">소개</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            개발자를 위한 간단하고 현대적인 블로그입니다. 이 블로그는 최신 웹 기술 스택을 사용하여 구축되었습니다.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">기술 스택</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Next.js 16</strong> - React 프레임워크</li>
            <li><strong>React 19</strong> - UI 라이브러리</li>
            <li><strong>TypeScript</strong> - 타입 안전성</li>
            <li><strong>Tailwind CSS</strong> - 유틸리티 퍼스트 CSS 프레임워크</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">특징</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>다크 모드 지원</li>
            <li>반응형 디자인</li>
            <li>빠른 페이지 로딩</li>
            <li>SEO 최적화</li>
            <li>현대적인 UI/UX</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

