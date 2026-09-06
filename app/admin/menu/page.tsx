"use client";

import React, { useState, useRef } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { MENU_ITEMS } from "../../data/restaurantData";
import { 
  Plus, 
  Search, 
  Filter, 
  GripVertical, 
  ImageIcon, 
  Tag, 
  Check, 
  Edit2, 
  MoreVertical, 
  Copy, 
  Trash2,
  Maximize2,
  Minimize2,
  ChevronDown,
  X,
  FolderPlus,
  Save,
  Upload,
  Camera
} from "lucide-react";

const DEFAULT_CATEGORY_SECTIONS = [
  { id: "pita", name: "Kebab w picie / pita", label: "🥙 Kebab w picie / pita" },
  { id: "rollo", name: "Rollo", label: "🌯 Rollo" },
  { id: "box", name: "Kebab Box", label: "📦 Kebab Box" },
  { id: "plates", name: "Dania na talerzu", label: "🍽️ Dania na talerzu" },
  { id: "veggie", name: "Wegetariańskie", label: "🌱 Wegetariańskie" },
  { id: "sides", name: "Dodatki i Napoje", label: "🍟 Dodatki i Napoje" }
];

export default function AdminMenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [categoriesList, setCategoriesList] = useState(DEFAULT_CATEGORY_SECTIONS);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  
  // Track open/collapsed categories
  const [openCategoryIds, setOpenCategoryIds] = useState<Record<string, boolean>>({});

  // Category creation state
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Category editing state
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingCategoryName, setEditingCategoryName] = useState("");

  // Menu item inline edit state
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editingItemData, setEditingItemData] = useState<{
    name: string;
    price: number;
    image: string;
    description?: string;
  }>({ name: "", price: 0, image: "" });

  // New Item Inline Creator Form State per category
  const [addingToCategoryId, setAddingToCategoryId] = useState<string | null>(null);
  const [newItemData, setNewItemData] = useState({
    name: "",
    price: 25.00,
    image: "",
    description: "Świeży kebab z autorskim sosem",
  });
  const [newItemError, setNewItemError] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const toggleCategoryOpen = (catId: string) => {
    setOpenCategoryIds((prev) => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Helper for image upload simulation
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>, isEditMode: boolean = false) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (isEditMode) {
        setEditingItemData((prev) => ({ ...prev, image: imageUrl }));
      } else {
        setNewItemData((prev) => ({ ...prev, image: imageUrl }));
      }
    }
  };

  // Create Category
  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;

    const catId = `cat-${Date.now()}`;
    const newCategory = {
      id: catId,
      name: newCategoryName.trim(),
      label: `📁 ${newCategoryName.trim()}`
    };

    setCategoriesList((prev) => [...prev, newCategory]);
    setNewCategoryName("");
    setIsAddingNewCategory(false);
  };

  // Edit Category Name
  const handleStartEditCategory = (cat: typeof DEFAULT_CATEGORY_SECTIONS[0]) => {
    setEditingCategoryId(cat.id);
    setEditingCategoryName(cat.name);
  };

  const handleSaveEditCategory = (catId: string) => {
    if (!editingCategoryName.trim()) return;
    setCategoriesList((prev) =>
      prev.map((c) => (c.id === catId ? { ...c, name: editingCategoryName.trim() } : c))
    );
    setEditingCategoryId(null);
  };

  // Start Adding Item
  const handleStartAddItem = (catId: string) => {
    setAddingToCategoryId(catId);
    setNewItemData({
      name: "",
      price: 25.00,
      image: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
      description: "Świeży kebab z autorskim sosem"
    });
    setNewItemError("");
  };

  // Save New Item
  const handleSaveNewItem = (e: React.FormEvent, catId: string) => {
    e.preventDefault();
    if (!newItemData.name.trim()) {
      setNewItemError("Wartość wymagana");
      return;
    }

    const createdItem = {
      id: `item-${Date.now()}`,
      name: newItemData.name,
      category: catId,
      price: Number(newItemData.price) || 25,
      description: newItemData.description,
      image: newItemData.image || "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
      isAvailable: true,
    };

    setMenuItems((prev) => [createdItem, ...prev]);
    setAddingToCategoryId(null);
    setNewItemData({ name: "", price: 25.00, image: "", description: "Świeży kebab z autorskim sosem" });
    setNewItemError("");
  };

  // Start Editing Item
  const handleStartEditItem = (item: typeof MENU_ITEMS[0]) => {
    setEditingItemId(item.id);
    setEditingItemData({
      name: item.name,
      price: item.price,
      image: item.image || "",
      description: item.description,
    });
  };

  // Save Edit Item
  const handleSaveEditItem = (id: string) => {
    if (!editingItemData.name.trim()) return;
    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              name: editingItemData.name,
              price: Number(editingItemData.price) || item.price,
              image: editingItemData.image || item.image,
              description: editingItemData.description || item.description,
            }
          : item
      )
    );
    setEditingItemId(null);
  };

  // Toggle Item Active/Inactive
  const handleToggleItemActive = (id: string) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isAvailable: item.isAvailable === false ? true : false } : item))
    );
  };

  // Delete item
  const handleDeleteItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
    setActiveMenuId(null);
  };

  // Duplicate item
  const handleDuplicateItem = (itemToCopy: typeof MENU_ITEMS[0]) => {
    const newItem = {
      ...itemToCopy,
      id: `copy-${Date.now()}`,
      name: `${itemToCopy.name} (Kopia)`,
    };
    setMenuItems((prev) => [newItem, ...prev]);
    setActiveMenuId(null);
  };

  // Filter items by search query
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab="menu"
          onRefresh={() => {}}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 overflow-y-auto">
          <div className="space-y-6 animate-fadeIn">
            {/* Header Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h2 className="font-judson font-bold text-3xl text-white">Offer</h2>
                <button
                  onClick={() => setIsAddingNewCategory(true)}
                  className="px-3.5 py-1.5 flame-btn-gradient text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-lg shadow-[#f26522]/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" /> Dodaj Kategorię
                </button>
                <button
                  onClick={() => {
                    const allCatIds = categoriesList.map((c) => c.id);
                    const allAreOpen = allCatIds.every((id) => openCategoryIds[id]);

                    if (allAreOpen) {
                      // Collapse all
                      setOpenCategoryIds({});
                    } else {
                      // Expand all
                      const openAllState: Record<string, boolean> = {};
                      allCatIds.forEach((id) => (openAllState[id] = true));
                      setOpenCategoryIds(openAllState);
                    }
                  }}
                  className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer ml-2 p-1.5 rounded-xl hover:bg-white/5"
                  title={
                    categoriesList.every((c) => openCategoryIds[c.id])
                      ? "Zwiń wszystkie kategorie"
                      : "Rozwiń wszystkie kategorie"
                  }
                >
                  {categoriesList.every((c) => openCategoryIds[c.id]) ? (
                    <Minimize2 className="w-4 h-4 text-[#f26522]" />
                  ) : (
                    <Maximize2 className="w-4 h-4 text-neutral-400 hover:text-white" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-400 font-medium">Language versions:</span>
                <select className="bg-[#151515] border border-white/10 text-xs text-white rounded-xl px-3 py-1.5 font-bold focus:outline-none focus:border-[#f26522]">
                  <option value="pl" className="bg-[#141414] text-white">PL (Polski)</option>
                  <option value="en" className="bg-[#141414] text-white">EN (English)</option>
                </select>
              </div>
            </div>

            {/* Inline Add Category Bar */}
            {isAddingNewCategory && (
              <form
                onSubmit={handleCreateCategory}
                className="bg-[#151515] border border-[#f26522]/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 shadow-xl animate-fadeIn"
              >
                <div className="flex items-center gap-2 text-[#f26522] shrink-0 font-bold text-xs">
                  <FolderPlus className="w-4 h-4" /> Nowa Kategoria:
                </div>
                <input
                  type="text"
                  autoFocus
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="np. Napoje, Desery, Kebab w bułce..."
                  className="flex-1 bg-[#0e0e0e] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                />
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 flame-btn-gradient text-white text-xs font-bold rounded-xl shadow-md transition-transform active:scale-95"
                  >
                    Dodaj Kategorię
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddingNewCategory(false)}
                    className="p-2 text-neutral-400 hover:text-white rounded-xl bg-white/5 border border-white/10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Search and Filters Bar */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, options, tags..."
                  className="w-full bg-[#151515] border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                />
              </div>
              <button className="px-4 py-2.5 bg-[#151515] hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-neutral-300 flex items-center gap-2 transition-colors">
                <Filter className="w-4 h-4 text-[#f26522]" /> Filters
              </button>
            </div>

            {/* Render Category Sections */}
            <div className="space-y-4">
              {categoriesList.map((cat) => {
                const isOpen = !!openCategoryIds[cat.id];
                const categoryItems = filteredItems.filter(
                  (item) => item.category === cat.id || (cat.id === "pita" && item.category === "pita")
                );

                const isEditingCat = editingCategoryId === cat.id;

                return (
                  <div key={cat.id} className="space-y-2">
                    {/* Category Header Card */}
                    <div className="bg-[#151515] border border-white/10 rounded-2xl p-3.5 flex items-center justify-between shadow-md">
                      <div className="flex items-center gap-3 flex-1">
                        <GripVertical className="w-4 h-4 text-neutral-600 cursor-grab" />
                        <button
                          onClick={() => toggleCategoryOpen(cat.id)}
                          className="p-1 text-neutral-400 hover:text-white transition-transform rounded-lg hover:bg-white/5"
                          title={isOpen ? "Zwiń kategorię" : "Rozwiń kategorię"}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "" : "-rotate-90"}`} />
                        </button>
                        <button
                          onClick={() => handleStartAddItem(cat.id)}
                          className="w-7 h-7 rounded-lg bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] hover:bg-[#f26522] hover:text-white transition-colors"
                          title="Dodaj nową pozycję menu w tej kategorii"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2 border border-white/10 rounded-xl px-3 py-1.5 bg-[#0e0e0e] flex-1 max-w-xl">
                          <Tag className="w-3.5 h-3.5 text-neutral-500" />
                          {isEditingCat ? (
                            <input
                              type="text"
                              autoFocus
                              value={editingCategoryName}
                              onChange={(e) => setEditingCategoryName(e.target.value)}
                              className="bg-transparent text-sm font-bold text-white focus:outline-none w-full"
                            />
                          ) : (
                            <span className="text-sm font-bold text-white truncate">{cat.name}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs text-neutral-400 font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded-lg">
                          {categoryItems.length} pozycji
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#f26522]"></div>
                        </label>
                        
                        {/* Interactive Category Edit Button */}
                        {isEditingCat ? (
                          <button
                            onClick={() => handleSaveEditCategory(cat.id)}
                            className="p-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                            title="Zapisz nazwę kategorii"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStartEditCategory(cat)}
                            className="p-1 text-neutral-400 hover:text-[#f26522] transition-colors"
                            title="Edytuj kategorię"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        )}

                        {/* Category 3-Dot More Options */}
                        <div className="relative">
                          <button
                            onClick={() => setActiveMenuId(activeMenuId === `cat-pop-${cat.id}` ? null : `cat-pop-${cat.id}`)}
                            className="p-1 text-neutral-400 hover:text-white transition-colors"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>

                          {activeMenuId === `cat-pop-${cat.id}` && (
                            <div className="absolute right-0 top-8 z-40 bg-[#1a1a1a] border border-white/15 rounded-xl p-1.5 w-36 shadow-xl animate-fadeIn space-y-1">
                              <button
                                onClick={() => {
                                  const copiedCat = {
                                    id: `cat-copy-${Date.now()}`,
                                    name: `${cat.name} (Kopia)`,
                                    label: `📁 ${cat.name} (Kopia)`
                                  };
                                  setCategoriesList((prev) => [...prev, copiedCat]);
                                  setActiveMenuId(null);
                                }}
                                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                              >
                                <Copy className="w-3.5 h-3.5 text-neutral-400" /> Copy
                              </button>
                              <button
                                onClick={() => {
                                  setCategoriesList((prev) => prev.filter((c) => c.id !== cat.id));
                                  setActiveMenuId(null);
                                }}
                                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5 text-red-400" /> Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Inline New Item Creation Box with Image Input */}
                    {addingToCategoryId === cat.id && (
                      <form
                        onSubmit={(e) => handleSaveNewItem(e, cat.id)}
                        className="bg-[#151515] border border-red-500/40 rounded-2xl p-4 space-y-3 shadow-xl animate-fadeIn relative"
                      >
                        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                          <div className="flex items-center gap-3 flex-1">
                            <GripVertical className="w-4 h-4 text-neutral-600 shrink-0" />
                            <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                            
                            {/* Image Uploader & Preview Box */}
                            <label className="w-10 h-10 rounded-xl bg-[#0e0e0e] border border-red-500/40 flex items-center justify-center cursor-pointer hover:border-red-500 transition-colors overflow-hidden group shrink-0 relative">
                              {newItemData.image ? (
                                <img src={newItemData.image} alt="Preview" className="w-full h-full object-cover" />
                              ) : (
                                <Camera className="w-4 h-4 text-red-400" />
                              )}
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleImageFileChange(e, false)}
                              />
                            </label>

                            <div className="flex-1 max-w-2xl space-y-1">
                              <div className="relative border border-red-500/60 rounded-xl bg-[#0e0e0e] px-3.5 py-2 flex items-center gap-2">
                                <Tag className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                <input
                                  type="text"
                                  autoFocus
                                  value={newItemData.name}
                                  onChange={(e) => {
                                    setNewItemData({ ...newItemData, name: e.target.value });
                                    if (newItemError) setNewItemError("");
                                  }}
                                  placeholder="Wpisz nazwę pozycji dania..."
                                  className="bg-transparent text-xs font-semibold text-white placeholder-neutral-500 focus:outline-none w-full"
                                />
                              </div>

                              {/* Local Image File Picker Button */}
                              <div className="flex items-center gap-2">
                                <label className="cursor-pointer px-3 py-1.5 bg-[#0e0e0e] hover:bg-white/5 border border-white/15 rounded-xl text-xs text-neutral-300 flex items-center gap-2 transition-colors">
                                  <Upload className="w-3.5 h-3.5 text-[#f26522]" />
                                  <span>Wybierz zdjęcie z komputera...</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleImageFileChange(e, false)}
                                  />
                                </label>
                                {newItemData.image && (
                                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                                    <Check className="w-3 h-3" /> Zdjęcie załadowane
                                  </span>
                                )}
                              </div>

                              {newItemError && (
                                <div className="text-[11px] text-red-400 font-semibold flex items-center gap-1.5 pl-1 pt-0.5">
                                  <span className="w-3.5 h-3.5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold">!</span>
                                  <span>{newItemError}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-3 justify-end">
                            <div className="flex items-center gap-1 border border-white/10 rounded-xl px-3 py-1.5 bg-[#0e0e0e] w-28">
                              <input
                                type="number"
                                step="0.01"
                                value={newItemData.price}
                                onChange={(e) => setNewItemData({ ...newItemData, price: Number(e.target.value) })}
                                className="bg-transparent text-xs font-bold text-[#f26522] w-full text-right focus:outline-none"
                              />
                              <span className="text-[10px] text-neutral-500">PLN</span>
                            </div>

                            <button
                              type="submit"
                              className="px-4 py-2 flame-btn-gradient text-white text-xs font-bold rounded-xl shadow-md transition-transform active:scale-95"
                            >
                              Zapisz
                            </button>
                            <button
                              type="button"
                              onClick={() => setAddingToCategoryId(null)}
                              className="px-3 py-2 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs font-bold rounded-xl border border-white/10"
                            >
                              Anuluj
                            </button>
                          </div>
                        </div>
                      </form>
                    )}

                    {/* Collapsible Category Menu Items Accordion */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 space-y-2 pl-2 sm:pl-4">
                        {categoryItems.length === 0 ? (
                          <div className="p-4 bg-[#151515]/60 border border-white/5 rounded-2xl text-center text-xs text-neutral-500 italic">
                            Brak pozycji w tej kategorii. Kliknij + na nagłówku, aby dodać danie.
                          </div>
                        ) : (
                          categoryItems.map((item) => {
                            const isAvailable = item.isAvailable !== false;
                            const isEditingItem = editingItemId === item.id;

                            return (
                              <div
                                key={item.id}
                                className="bg-[#151515] border border-white/10 rounded-2xl p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-white/20 transition-all shadow-sm relative"
                              >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  <GripVertical className="w-4 h-4 text-neutral-600 shrink-0 cursor-grab" />
                                  
                                  {/* Image Thumbnail with Upload Trigger */}
                                  <label className="w-10 h-10 rounded-xl bg-[#0e0e0e] border border-white/10 flex items-center justify-center text-neutral-400 shrink-0 overflow-hidden relative cursor-pointer group hover:border-[#f26522]/50 transition-colors">
                                    {isEditingItem ? (
                                      editingItemData.image ? (
                                        <img src={editingItemData.image} alt={item.name} className="w-full h-full object-cover" />
                                      ) : (
                                        <Camera className="w-4 h-4 text-[#f26522]" />
                                      )
                                    ) : item.image ? (
                                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    ) : (
                                      <ImageIcon className="w-4 h-4 text-neutral-500" />
                                    )}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                      <Camera className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      onChange={(e) => handleImageFileChange(e, isEditingItem)}
                                    />
                                  </label>

                                  <div className="flex-1 min-w-0 space-y-1">
                                    <div className="flex items-center gap-2 border border-white/10 rounded-xl px-3 py-1.5 bg-[#0e0e0e]">
                                      <Tag className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                                      {isEditingItem ? (
                                        <input
                                          type="text"
                                          autoFocus
                                          value={editingItemData.name}
                                          onChange={(e) =>
                                            setEditingItemData({ ...editingItemData, name: e.target.value })
                                          }
                                          className="bg-transparent text-xs font-semibold text-white focus:outline-none w-full"
                                        />
                                      ) : (
                                        <span className="text-xs font-semibold text-white truncate">{item.name}</span>
                                      )}
                                    </div>

                                    {/* Local Image File Picker in Edit Mode */}
                                    {isEditingItem && (
                                      <div className="flex items-center gap-2 pt-1">
                                        <label className="cursor-pointer px-3 py-1 bg-[#0e0e0e] hover:bg-white/5 border border-white/15 rounded-xl text-xs text-neutral-300 flex items-center gap-1.5 transition-colors">
                                          <Upload className="w-3.5 h-3.5 text-[#f26522]" />
                                          <span>Zmień zdjęcie z komputera...</span>
                                          <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageFileChange(e, true)}
                                          />
                                        </label>
                                        {editingItemData.image && (
                                          <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                                            <Check className="w-3 h-3" /> Zmieniono
                                          </span>
                                        )}
                                      </div>
                                    )}

                                    <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] font-semibold">
                                        {cat.name}
                                      </span>
                                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-400 flex items-center gap-1">
                                        <Tag className="w-3 h-3 text-neutral-500" /> Wybór mięsa
                                      </span>
                                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-400 flex items-center gap-1">
                                        <Tag className="w-3 h-3 text-neutral-500" /> Sos do wyboru
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3 justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-2 md:pt-0">
                                  {/* Price Display / Edit */}
                                  <div className="flex items-center gap-2 border border-white/10 rounded-xl px-3 py-1.5 bg-[#0e0e0e] w-32 justify-end">
                                    {isEditingItem ? (
                                      <input
                                        type="number"
                                        step="0.01"
                                        value={editingItemData.price}
                                        onChange={(e) =>
                                          setEditingItemData({
                                            ...editingItemData,
                                            price: Number(e.target.value),
                                          })
                                        }
                                        className="bg-transparent text-xs font-bold text-[#f26522] w-full text-right focus:outline-none"
                                      />
                                    ) : (
                                      <span className="text-xs font-bold text-[#f26522]">{item.price.toFixed(2)}</span>
                                    )}
                                    <span className="text-[10px] text-neutral-500">PLN</span>
                                  </div>

                                  {/* Status Toggle Checkmark */}
                                  <button
                                    onClick={() => handleToggleItemActive(item.id)}
                                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                                      isAvailable
                                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                                        : "bg-neutral-800 text-neutral-500 border border-white/10"
                                    }`}
                                    title={isAvailable ? "Włączony" : "Wyłączony"}
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                  </button>

                                  {/* Item Edit Button */}
                                  {isEditingItem ? (
                                    <button
                                      onClick={() => handleSaveEditItem(item.id)}
                                      className="p-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                                      title="Zapisz zmiany"
                                    >
                                      <Save className="w-4 h-4" />
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => handleStartEditItem(item)}
                                      className="p-1.5 text-neutral-400 hover:text-[#f26522] transition-colors"
                                      title="Edytuj pozycję"
                                    >
                                      <Edit2 className="w-4 h-4" />
                                    </button>
                                  )}

                                  {/* More Context Dropdown */}
                                  <div className="relative">
                                    <button
                                      onClick={() => setActiveMenuId(activeMenuId === item.id ? null : item.id)}
                                      className="p-1.5 text-neutral-400 hover:text-white transition-colors"
                                    >
                                      <MoreVertical className="w-4 h-4" />
                                    </button>

                                    {activeMenuId === item.id && (
                                      <div className="absolute right-0 top-8 z-40 bg-[#1a1a1a] border border-white/15 rounded-xl p-1.5 w-32 shadow-xl animate-fadeIn space-y-1">
                                        <button
                                          onClick={() => handleDuplicateItem(item)}
                                          className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                        >
                                          <Copy className="w-3.5 h-3.5 text-neutral-400" /> Kopia
                                        </button>
                                        <button
                                          onClick={() => handleDeleteItem(item.id)}
                                          className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                        >
                                          <Trash2 className="w-3.5 h-3.5 text-red-400" /> Usuń
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
