---
title: Case Study Components
description: 'Documentation for using the ProjectSection and CaseStudyImage components'
publishDate: 'Aug 12 2024'
tags: ['documentation']
seo:
  title: 'Case Study Components Documentation'
  description: 'Learn how to use standardized components in your case studies'
---

# Case Study Components

These components provide a standardized way to present case studies with consistent image sizing (1216x684 pixels) and formatting.

## Importing Components

To use these components in your MDX files, first import them at the top of your MDX file:

```jsx
import { ProjectSection, CaseStudyImage } from '../../content/components';
```

## ProjectSection Component

The `ProjectSection` component creates a full section with image and content.

### Basic Usage

```jsx
<ProjectSection
  imageSrc="path/to/image.jpg"
  imageAlt="Description of the image"
  title="Section Title"
>
  Your content goes here. You can use **markdown** formatting inside.
  
  - List items
  - Are supported
  - Within the component
</ProjectSection>
```

### Props

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `imageSrc` | string | Yes | - | URL of the image to display |
| `imageAlt` | string | Yes | - | Alt text for the image |
| `title` | string | No | - | Optional section title |
| `imagePosition` | 'top' \| 'bottom' | No | 'top' | Position of the image relative to content |
| `class` | string | No | - | Additional CSS classes to apply |

### Examples

#### Image on Top (Default)

```jsx
<ProjectSection
  imageSrc="/project-image.jpg"
  imageAlt="Project wireframes"
  title="User Research"
>
  During our research phase, we discovered that users preferred...
</ProjectSection>
```

#### Image on Bottom

```jsx
<ProjectSection
  imageSrc="/solution-image.jpg"
  imageAlt="Final design solution"
  title="The Solution"
  imagePosition="bottom"
>
  After analyzing the research, we designed a solution that...
</ProjectSection>
```

## CaseStudyImage Component

The `CaseStudyImage` component creates a standalone image with an optional caption.

### Basic Usage

```jsx
<CaseStudyImage
  src="path/to/image.jpg"
  alt="Description of the image"
  caption="Optional caption text"
/>
```

### Props

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `src` | string | Yes | - | URL of the image to display |
| `alt` | string | Yes | - | Alt text for the image |
| `caption` | string | No | - | Optional caption text to display below the image |
| `class` | string | No | - | Additional CSS classes to apply |

## Image Dimensions

Both components are designed to work with images that are 1216x684 pixels. This ensures a consistent aspect ratio and presentation across all case studies.

- Width: 1216 pixels
- Height: 684 pixels
- Aspect ratio: 16:9 (approximately)

If your image has different dimensions, it will be sized to fit these exact dimensions using `object-fit: cover`.

## Tips for Best Results

1. Prepare images at the recommended 1216x684 dimension for best quality
2. Use descriptive alt text for accessibility
3. Keep section titles and captions concise and clear
4. Use components consistently throughout your case study