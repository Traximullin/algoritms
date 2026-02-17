pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
    (0..12u8)
        .flat_map(|h| (0..60u8).map(move |m| (h, m)))
        .filter(|(h, m)| h.count_ones() + m.count_ones() == turned_on as u32)
        .map(|(h, m)| format!("{h}:{m:02}"))
        .collect()
}
