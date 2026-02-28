import { vi } from 'vitest';
import '@testing-library/jest-dom';

// IntersectionObserver APIのモック（jsdom環境では未定義のため）
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
