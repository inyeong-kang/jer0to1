import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Next.js 16과 React 19의 새로운 기능",
    slug: "nextjs-16-react-19-new-features",
    excerpt: "Next.js 16과 React 19의 주요 변경사항과 새로운 기능들을 살펴봅니다.",
    content: `# Next.js 16과 React 19의 새로운 기능

Next.js 16과 React 19가 출시되면서 많은 흥미로운 기능들이 추가되었습니다.

## 주요 변경사항

### Next.js 16
- **향상된 성능**: 더 빠른 빌드 시간과 런타임 성능
- **개선된 개발자 경험**: 더 나은 에러 메시지와 디버깅 도구
- **새로운 API**: 더 강력한 서버 컴포넌트 지원

### React 19
- **자동 배칭**: 상태 업데이트가 자동으로 배칭됩니다
- **향상된 서버 컴포넌트**: 더 나은 서버 사이드 렌더링 지원
- **개선된 성능**: 메모이제이션과 최적화가 향상되었습니다

## 결론

이러한 업데이트들은 개발자들에게 더 나은 개발 경험과 성능을 제공합니다.`,
    date: "2024-01-15",
    author: "개발자",
    tags: ["Next.js", "React", "웹 개발"],
    readTime: 5,
  },
  {
    id: "2",
    title: "TypeScript로 타입 안전한 코드 작성하기",
    slug: "typescript-type-safe-coding",
    excerpt: "TypeScript를 활용하여 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아봅니다.",
    content: `# TypeScript로 타입 안전한 코드 작성하기

TypeScript는 JavaScript에 타입 시스템을 추가하여 더 안전한 코드를 작성할 수 있게 해줍니다.

## 타입의 중요성

타입 시스템은 다음과 같은 이점을 제공합니다:

1. **컴파일 타임 에러 검출**: 런타임 전에 오류를 발견할 수 있습니다
2. **자동완성**: IDE에서 더 나은 자동완성을 제공합니다
3. **코드 문서화**: 타입 자체가 문서의 역할을 합니다

## 베스트 프랙티스

- 명시적인 타입 정의 사용
- 인터페이스와 타입 별칭 활용
- 제네릭을 적절히 사용

이러한 방법들을 통해 더 나은 코드를 작성할 수 있습니다.`,
    date: "2024-01-10",
    author: "개발자",
    tags: ["TypeScript", "프로그래밍"],
    readTime: 7,
  },
  {
    id: "3",
    title: "Tailwind CSS로 빠르게 스타일링하기",
    slug: "tailwind-css-fast-styling",
    excerpt: "Tailwind CSS를 사용하여 효율적이고 일관된 디자인 시스템을 구축하는 방법을 소개합니다.",
    content: `# Tailwind CSS로 빠르게 스타일링하기

Tailwind CSS는 유틸리티 퍼스트 CSS 프레임워크로, 빠르고 효율적인 스타일링을 가능하게 합니다.

## Tailwind CSS의 장점

### 빠른 개발 속도
- 유틸리티 클래스를 사용하여 빠르게 스타일링
- HTML에서 직접 스타일 적용 가능

### 일관된 디자인
- 디자인 시스템이 내장되어 있어 일관성 유지
- 커스터마이징이 쉬움

### 작은 번들 크기
- 사용하는 클래스만 포함되어 최적화됨

## 사용 팁

- 반복되는 스타일은 컴포넌트로 추출
- 커스텀 테마 설정 활용
- 다크 모드 지원 활용

Tailwind CSS를 통해 더 빠르고 효율적인 개발을 경험해보세요!`,
    date: "2024-01-05",
    author: "개발자",
    tags: ["Tailwind CSS", "CSS", "디자인"],
    readTime: 6,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

