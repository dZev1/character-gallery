package inventory

type Item struct {
	ID          ItemID `db:"id" json:"id,omitempty"`
	Name        string `db:"name" json:"name"`
	Type        Type   `db:"type" json:"type"`
	Description string `db:"description" json:"description"`
	Equippable  bool   `db:"equippable" json:"equippable"`
	Rarity      uint8  `db:"rarity" json:"rarity"`

	Damage     *uint64 `db:"damage" json:"damage,omitempty"`
	Defense    *uint64 `db:"defense" json:"defense,omitempty"`
	HealAmount *uint64 `db:"heal_amount" json:"heal_amount,omitempty"`
	ManaCost   *uint64 `db:"mana_cost" json:"mana_cost,omitempty"`
	Duration   *uint64 `db:"duration" json:"duration,omitempty"`
	Cooldown   *uint64 `db:"cooldown" json:"cooldown,omitempty"`
	Capacity   *uint64 `db:"capacity" json:"capacity,omitempty"`
}
