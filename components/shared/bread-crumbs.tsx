import { Link } from "react-router";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex items-center space-x-2 text-gray-300'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} className='flex items-center'>
              {index > 0 && <span className='mx-2 text-gray-400'>→</span>}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className='hover:text-white transition-colors'
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white" : ""}>{item.label}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
