'use client';

import Image from "next/image"

interface MenuItem {
    name: string;
    imageSrc: string;
    link: string;
}

interface BlockItemProps {
    title: string;
    menuItems: MenuItem[];
}

export default function BlockItem({ title, menuItems }: BlockItemProps) {
    return (
        <div className="block_item cursor-pointer">
            <p className="block_item_title">{title}</p>

            <div className="block_menu">
                <ul className="block_menu_list">
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index} className="block_menu_item">
                                <a className="block_menu_link" href={item.link}>
                                    <span className="block_menu_link_img">
                                        <Image src={item.imageSrc} width={100} height={100} alt={item.name} />
                                    </span>
                                    <span className="block_menu_link_text">{item.name}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}