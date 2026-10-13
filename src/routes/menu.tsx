import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DishGrid, Invitation, PageIntro } from '@/components/restaurant/site';
import { dishes, pageHead } from '@/lib/restaurant';
export const Route = createFileRoute('/menu')({head:()=>pageHead('Our Menu — Savor','Explore Savor’s seasonal starters, handmade pasta and classic Italian desserts.'),component:MenuPage});
function MenuPage() { const [category,setCategory]=useState('All plates'); return <main><PageIntro eyebrow="Seasonal by nature" title="The Savor menu" copy="A little Italian soul. A lot of seasonal goodness. Simple plates, made beautifully."/><section className="section container"><div className="menu-tabs" aria-label="Menu categories">{['All plates','Starters','Mains','Desserts'].map(item=><Button variant="quiet" className={category===item?'selected':''} key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</Button>)}</div><DishGrid items={category==='All plates'?dishes:dishes.filter(d=>d.category===category)}/><p className="menu-note">A sample seasonal menu. Please speak with the restaurant about dietary requirements and allergens.</p></section><Invitation/></main>; }
